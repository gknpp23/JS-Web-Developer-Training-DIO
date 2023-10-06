// Tipos são definidos em tempos de execução, e são bem dinâmicos ( conversões automáticas)
//As variáveis não ficam restritas a determinados tipos

/*
 Boolen - Null -Undefined - number - String - Symbol
*/
//Verificar tipo do dado -> operador typeof

//Object -> coleção dinâmica de chave / valor
//Metodos e atributos mutáveis
//Tipos primitivos => imutáveis
//Classes Wrappers -> encapsula os tipos

// Objetos literais
const obj01 = {
    id: 1,
    nome: 'Objeto-001',
    executar: function(){
        console.log(`Executei.... ${this.nome}`);
    } // se torna um metodo, passa a ter acesso ao this (escopo do objeto)
    //Arrow functions não tem contexto
};

console.log(obj01.nome);
console.log(obj01['id']); // podemos desestruturar ou reatribuir com essa notação
console.log(obj01.executar());



// Valores boolean -> true ou false (primitivos) -> operadores relacionais
//string vazia == false
const nome = 'gabriel';
const sobrenome = '';
if(nome !== sobrenome){
    console.log('Executei');
}
// Null e Undefined
// null -> ausência de valor
// Undefined e a falta de definição, não existe.

const nullExample = null;
let undefinedExample;

console.log(nullExample);
console.log(undefinedExample);

// +infinity | -Infinity | NaN ( Not a Number) -> Number
// Double Precision 64-bit binary format IEEE 754

 console.log(0.1 + 0.2 === 0.3) // retorna false, devido as casas decimais extras

//  Strings - conjunto de caracteres -> primitivo (imutável)
// há 3 formas, aspas duplas, simples ou templates ( com crase )
//por convenção, usamos as aspas simples. Mais fácil de inserir HTML
const str1 = "hello";
const pHtml = '<p id="text">World</p>'
const templateStr = `meu nome é ${nome}`; //inserir o valor da variável nome

// Symbol -> objeto imutável único

const simb = Symbol('10'); // gera instâncias imutáveise únicas,, útil para criar identificadores de objetos

console.log(simb);