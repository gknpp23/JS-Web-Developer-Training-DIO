// Funções sem retorno -> Procedimentos
function funcao(){
    console.log('Executando a função...')
}
function say_my_name(name){
    console.log('Your name is: '+ name)
}
// Função com retorno.
function pow(number){
    return number * number
}

// Organizando as funções
(function main(){ //funções auto invocáveis não precisam ser nomeadas, código totalmente isolado
    console.log("Programa principal")
    // chamada de funções externas
    funcao();
    say_my_name('Gabriel');
    console.log(pow(10));
})();// Ou podemos invocar a função imediatamente.

// Função se torna um objeto do tipo function -> referenciado em outras funções ou atribuido a variáveis

// main(); chamada da função de maneira tradicional


