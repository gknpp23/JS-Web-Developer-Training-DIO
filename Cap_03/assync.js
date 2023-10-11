//  Assincronismo
// Leva um tempo pra executar, espera por algum momento

//  Promisse - promessas de execução
// Estrutura básica
new Promise((resolve, reject) => {
    // bloco de código
    //resolve() // Se der certo, chame resolve

    //reject() // Se der errado, chame reject
})

// EXEMPLO

const randomNumber = new Promise((resolve,reject) => {
    setTimeout(() => {
        const number = parseInt(Math.random() * 100)
        resolve(number);
    },2000); // valor em milisegundos, corresponde a 2 seg
    
})
console.log('Tô seguindo o fluxo..')
// Uso de uma Promisse

randomNumber //espere executar
    .then((value) => { // e então, faça..
        console.log(value)
        return value + 10 //retorna o valor para um próximo .then
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => { // caso de um erro, faça..
        console.log(error)
    })
    .finally(() => { //finalmente, executa toda vez, independente do resultado.
        console.log('Executei..');
    })


//  LER ARQUIVO 

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname,'tarefas.csv');

// leituraArquivo
//     .then((arquivo) => {
//        return arquivo.toString('utf8')
//     }) 
//     .then((texto) => {
//         return texto.split('\n').slice(1)
//     })
//     .then((textoFormatado) => textoFormatado.map((linha) => {
//             const [nome, feito] = linha.split(";")
//             return {
//                 nome, 
//                 feito
//             }
//     }))
//     .then((listaTarefa) => console.log(listaTarefa))
//     .catch((error) => {
//     console.log('Deu ruim!', error)
//     })

//  Async e await
//  Açucar sintático para: then, catch, finally
// Abstrai a manipulação de Promise para uma escrita procedural(síncrona)
// Await só pode ser usando em uma função async

async function buscaArquivo() {

    // Para .catch e .finally, usamos o bloco de tratamento
    try {
         // Await aguarda uma promisse ser executada
        const leituraArquivo = await fs.promises.readFile(filePath) // retorna uma promisse
        // similar aos .thens
        const texto = leituraArquivo.toString('utf8')

        console.log(texto)

    } catch (error) {
        console.log(error)
    } finally {
        console.log("Finalizado!")
    }
   
}
buscaArquivo();

