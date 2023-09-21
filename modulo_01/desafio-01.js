/* 
Desafio 01
imprimir valor gasto na viagem, em reais. 
*/

// Variáveis
// valores de exemplo: 5, 4 l/km, 200km. (entradas)

let valor_combustivel = 5.79;
let gasto_medio_combustivel_km = 4;
let distancia_km_viagem = 200;
let gasto_viagem = 0;

// Fórmula: distancia / media_litro * valor_combustivel
// (distancia_km_viagem / gasto_medio_combustivel_km) === Litros consumidos

gasto_viagem = (distancia_km_viagem / gasto_medio_combustivel_km) * valor_combustivel;

// Saida
// .toFixed() -> converte valor inteiro para string, recebe o números de casa decimais
console.log("Essa viagem custará R$ " + gasto_viagem.toFixed(2));





