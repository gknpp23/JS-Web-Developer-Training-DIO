// Manipulação de listas

const lista = [1,2,3,4,5,6,7,8,9,10];

// ForEach
lista.forEach((value,i,listRef) => {
    console.log(value,i,listRef)
    //sintaxe reduzida do for, sendo um pouco mais lento quanto maior a lista
});

// Filter
const listaPar = lista.filter((element) => { // cria uma nova lista
    return (element % 2 === 0); //sempre retorna um boolean
})

console.log(listaPar);

// Map
// Transformar listas, fazer um mapeamento

class Pessoa {
    constructor(name){
        this.name = name
    }
}

const listaPessoa = [new Pessoa('Jorge'),new Pessoa('Valmir'),new Pessoa('Juca')]

console.log(listaPessoa);

const listaNome = listaPessoa.map((element) => { //gera uma nova lista
    return element.name
})

console.log(listaNome);


// Reduce
// Reduz a lista a um único valor

const somaValores = lista.reduce((previousValue,currentValue) => {
    return previousValue + currentValue;
},0)//podemos passar um initial value

console.log(somaValores);

// Join

console.log(lista.join('_'));

//  Lembrando que é possivel usar essas funções em conjunto