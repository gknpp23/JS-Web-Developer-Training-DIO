// Objeto (coleção dinâmica de dados) -> chaves : valores, além de funções (metodos)
// objeto['atributo'] = valor -> notação possivel
const dev ={
    nome: 'Gabriel Knupp',
    idade: 22,
    linguagem: ['python','JS'],
    codar: function (){
        console.log('Keep calm!! O dev %s está codando em %s agora!',this.nome,this.linguagem[1]);
    }
}

console.log("O dev "+dev.nome+", tem "+dev.idade+" anos");

// adicionando valores

dev.senioridade ='jr';

// removendo valores

delete dev.senioridade;

// Executando metodo
dev.codar();

// classes
// Define um novo tipo
class Pessoa {
    nome;
    idade;
    constructor(nome, idade){ //metodo chamado sempre que uma pessoa for instanciada
        this.nome = nome;
        this.idade = idade;
    }
    falar() { // metodos não precisam da palavra function
        console.log('Meu nome é %s', this.nome);
    }
}
// Podemos usar objetos como parametros de funções
function compare_person(p1, p2){
    if (p1.idade > p2.idade){
        return (`${p1.nome} é mais velho(a) que ${p2.nome}`)
    }
    else if (p1.idade < p2.idade){
        return (`${p2.nome} é mais velho(a) que ${p1.nome}`)
    }
    else{
        return (`${p1.nome} tem a mesma idade que ${p2.nome}`)
    }
}

const dev_2 = new Pessoa('James da Salada de fruta',30); // Ou seja, o dev_2 é uma instância ( ou ocorrência ) de uma pessoa.

const dev_3 = new Pessoa('Sigma Chad', 49)

const result = compare_person(dev_2,dev_3);


// Saidas
// console.log(dev);
console.log(dev_2);
console.log(result);


