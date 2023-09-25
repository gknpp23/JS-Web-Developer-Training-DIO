/* 
Desafio 02
imprimir valor gasto na viagem, em reais. 
*/

// Variáveis
// Utilizando const pois não é necessário modificar o valor ao longo do programa.

// valores de exemplo: 5, 4 l/km, 200km. (entradas)


const valor_etanol = 3.0;
const valor_gasolina = 5.0;
 const tipo_combustivel = 'Etanol'; //ou 'Gasolina'

const media_litro = 4;
const distancia_km = 200;

let litros_consumidos = 0;
let gasto_viagem = 0;

// Fórmula: distancia / media_litro * valor_combustivel
litros_consumidos = distancia_km / media_litro;

if (tipo_combustivel === 'Etanol') {
    gasto_viagem = litros_consumidos * valor_etanol
}
else{
    gasto_viagem = litros_consumidos * valor_gasolina
}


// Saida
// .toFixed() -> converte valor inteiro para string, recebe o números de casa decimais
console.log("Essa viagem custará R$ " + gasto_viagem.toFixed(2));
