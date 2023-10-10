// First Class Function
// Higher order function

// Funções podem ser atribuidas a variáveis, nomes são ilustrativos

// Declaração
function falaMeuNome(){
    return 'Ai preto!';
}
// Passa como valor pra uma nova referência
const referenciaMusicaPaia = falaMeuNome;

// chamada da função feita pela nova referência
console.log(referenciaMusicaPaia()); 


// Funções podem ser passadas para outras funções como atributo e inclusive podem ser retornadas

function falaMeuPronome(falaMeuNome){
    console.log(`${falaMeuNome()}x`);
}

falaMeuPronome(falaMeuNome);

// function declaration -> usa a palvra reservada 'function'
function funcDeclaration(){
    console.log('Faz nada!');
}

// function Expression -> atribui a referencia diretamente a uma variável
const varExpression = function(){
    console.log('Faz nada ao quadrado');
}

//  Diferença entre as duas declarações
// Declaration sofre o hoisting como um único bloco, logo, pode ser executada antes da declaração
// Expression sofre o hoisting apenas na declaração e não na atribuição, não pode ser executada antes da declaração.


// Formas modernas de declaração -> Após ES6

// comum, de forma explìcita
// Dessa forma, isola o escopo e assume o contexto de objetos
function funcao01(){
    console.log('véio que nem o sol');
}

// Arrow function -> sintaxe reduzida
// Não possui um contexto (escopo). não é possivel usar o this
const funcao02 = () => { // anônima, não tem um rotuilo específico
    console.log('Saindo do forno');
}

// Closures ou fechamentos
// funções se lembram do contexto em que foram declaradas

function soma(x){
    return function(y){
        return x + y; //buscou o X do contexto em que foi declarado
        // também se aplica as arrow functions
    }
}

console.log(soma(10)(20)); // chamada da primeiro função entre o primeiro parentêses, e assim por diante.


// Invocação de funções

// Direta
// funcao(); usando o nome ou referência-> mais simples

// Uma função é um onjeto, ou seja, também possui metódos
// Metódos  .apply()  e .call()

const dev = {
    nome: 'Gabriel',
    idade: 22
}

function chora(prefixo){
    console.log(prefixo, this.nome) //this e sobre o contexto passado
}

chora.apply(dev, ['OAAAAAAAAA']) //Passa o contexto e uma lista de argumentos

chora.call(dev, 'chama fiu') // passa o contexto e os argumentos, separados por virgulas


// new -> para executar funções como construtoras

// Callbacks
// Retornos de funções
