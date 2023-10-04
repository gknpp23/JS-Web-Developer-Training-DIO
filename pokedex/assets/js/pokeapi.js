const pokeapi = {};
function convert_Pokemon_model(poke_detail){
    const pokemon = new Pokemon;

    pokemon.name = poke_detail.name;
    pokemon.number = poke_detail.id;

    const types = poke_detail.types.map((typeSlot) => typeSlot.type.name);
    const [main_type] = types;

    pokemon.types = types;
    pokemon.main_type =  main_type;

    pokemon.image = poke_detail.sprites.other.dream_world.front_default;

    return pokemon;


}
pokeapi.get_pokemon_detail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convert_Pokemon_model)
}
pokeapi.get_pokemon = (offset = 0, limit = 6) => {
  
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
            .then( (response) => response.json() )

            .then((response_body) => response_body.results)

            .then((pokemons) => pokemons.map(pokeapi.get_pokemon_detail))

            .then((detail_requests) => Promise.all(detail_requests))

            .then((pokemon_details) => pokemon_details);

            
}