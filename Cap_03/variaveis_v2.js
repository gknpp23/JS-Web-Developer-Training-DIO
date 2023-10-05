// JS é case sentitive e fracamente tipada

// Var -> metodo comum de declaração de uma variável
// não é ecessário especificar o tipo, inclusive podemos mudar o tipo em tempo de execução
// realiza casting automático

var var_numero = 10;

var var_text1 = 'James'

var var_text2 = '20'

// concatenação
console.log(var_numero + var_text1);

// conversão pra tipo number
console.log(var_numero - var_text2);

// hoisting -> Içamento (eleva a declaração em tempo de execução)
// chamada de funções ou declaraçõs a var, antes mesmo de serem declaradas

function_hoisting();

function function_hoisting(){
    console.log('Achou que eu tava brincando?');
}

// Outro exemplo

console.log(var1); //dessa forma, será printado como undefined

var var1 = "Hello"; //declaração é içadada mas atribuição não

//  Outro exemplo de içamento de declaração ( apenas )

// teste1();
teste2();

var teste1 = function (){
    console.log('Não executei, affs!') // novamente, iça apenas a declaração e não a atribuição
}
function teste2(){
    console.log('Executei!');
}

// Escopos e diferenças entre var, let e const

/*
var era muito usada antes do ECMA6(2015)
gera um problema de vazamento de escopo, se tornando muito abrangente (hoisting)
Não escapando apenas do escopo de uma função, ou seja, tem duas opções
escopo global ou escopo de função
*/

//let se limita a qualquer tipo de bloco (if, while, for..)
//sofre hoisting apenas dentro do bloco 

// const tem o mesmo escopo que o let.
//Não pode ser reatribuido


// Convenções de nomenclaturas

//Não usar números ou caracteres especiais no inicio do nome
//podemos iniciar o nome por: letras (minusculas para váriaveis), underline ou sinal de dólar(como no Jquery)
//letras maisuculas para classes / construtores ( capitalize )
// UPPERCASE -> constantes

//Exemplos

// por convenção, entende se que é uma váriável que não deve ser modificado fora de um bloco ( privada)
var _teste001 = 10 ;

let variavelComum = 'vlw' //geralmente segue o padrão camelCase

const PI = 3.14;

class Carro {};






