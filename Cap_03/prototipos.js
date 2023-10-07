// Orientação a protótipos

//Prototipos -> base de objetos, implementa a herança

// Objeto -> coleção dinâmica de chave e valor
const Pessoa = {
    genero: 'Masculino'
}
const dev ={
    nome: 'gabriel',
    idade: 22,
    __proto__: Pessoa // dev extends Pessoa
}

console.log(dev.genero);

// Funções construtoras
//Possuem o atributo prototype
//Conceito de classe é relativo, funciona como uma função consturtora

function Empregado(cargo, salario){ //modelos de classes são convertudos para essa estrutura 
    this.cargo = cargo
    this.salario = salario
}

Empregado.prototype.trabalhar = function () {
    console.log('Acaba nunca esse expediente');
}

const func01 = new Empregado('dev junior', 1200); // o New cria uma instancia ( objeto ) que possui o escopo definido na classe construtora

func01.trabalhar();

console.log(func01)

// equivalente ao código abaixo
// class Empregado {
//     constructor(cargo,salario){
//         this.cargo = cargo;
//         this.salario = salario
//     }
//     trabalhar() {
//         console.log('Acaba nunca esse expediente');
//     }
// }

// Sobrescrita e Shadowing

//Propriedade mais próxima na cadeia de prototipo é mais relevante
// se o objetio homem possui idade e herdaa mesma propriedade do objeto Pessoa, a declarada no seu escopo é mais relevante

// não é possivel possui dois atributos com a mesma chave dentro de um objeto -> limitação



// Criação de literais com protótipos
//Usando __proto__ dentro do objeto
// todo obnjetos tem prototipo
//  Objetos não instanciados -> acessada pelo __proto__
// Objetos como função construtora -> acessada pelo atributo prototype
function Carro(nome,ano){
        this.nome = nome,
        this.ano = ano
}
    
const uno = Object.create(Carro);
uno.tipo = 'flex';

// Operador NEW
// Invoca uma função construtora
//Cria um escopo (objeto literal) novo -> atribuido ao this da função
//E esse escopo herda o protype (outro objeto literal) em que a função construtora se baseia

Carro.prototype.ligar = function(){
    console.log("Vrummm....");
}

const corsa = new Carro('Corsa',1994)
corsa.ligar();

// temos também o metodo .call()
// passa um escopo para a função construtora
// o novo objeto passado, assume o escopo da função construtora (com seus atributos e metodos)
//  Não atribui a referência a função construtora

const gol = {
    potencia: 1.4
};

Carro.call(gol,'Gol', 2010);
console.log(gol);

//  Alguns exemplos com prototype
// Todos objetos tem prototipo -> maior parte do JS são objetos

String.prototype.toPlang = function(){
    return `P${this}`
}

console.log('Jão'.toPlang());