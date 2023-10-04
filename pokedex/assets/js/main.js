const pokemon_list = document.getElementById('pokemonList');
const load_button = document.getElementById('loadMoreButton');
const limit = 5;
let offset = 0;




function load_pokemons(offset,limit){

    pokeapi.get_pokemon(offset, limit).then((pokemons = []) => {

        const new_html = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.main_type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.image}"
                        alt="${pokemon.name}">
                </div>
            </li>
            `).join('');
            
        pokemon_list.innerHTML += new_html;

        
    })
}
load_pokemons(offset,limit);

load_button.addEventListener('click',() => {
    offset += limit
    load_pokemons(offset,limit);
})