// declaração de uma lista de alunos
const alunos = ['Jão','Borracha','Irineu'];

// Acessando valores -> indice inicia em 0

// console.log(alunos[0]);

// adicionando novos valores na lista
alunos.push('Jailson Mendes');
// OU
alunos[4] = 'James da Salada de fruta'; //indice especifico -> Sobrescreve o valor antigo

// removendo o último item
console.log(alunos.pop());

// removendo o primeiro da lista
console.log(alunos.shift());

// saidas
console.log(alunos);
// Verificar tamanho de uma lista
console.log(alunos.length);

// Estruturas de repetição
// Usada para números de repetição bem definidos

const nome = 'gabriel' //Uma string pode ser entendida como um array de caracteres

for (let i = 0; i < nome.length; i++) {
    
    console.log(nome[i]);
    
}