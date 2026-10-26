const prompt = require("prompt-sync")();
// 7. Desafio · corrida.js (tela em branco)
// N1: peça os km e os minutos com prompt e Number() e mostre o total. Casos: 8, 20 → Total: R$ 31.00 · 0, 0 → Total: R$ 5.00 · 12.5, 30 → Total: R$ 45.00

//Variaveis
// const taxaFixa = 5.0;
// let precoKm = 2.0;
// let precoMinuto = 0.5;
// //prompt
// let km = Number(prompt("Quantos km? "));
// let minutos = Number(prompt("Quantos minutos? "));
// //calculo
// let total = taxaFixa + km * precoKm + minutos * precoMinuto;
// console.log(`Total: R$ ${total.toFixed(2)}`);

// N2 (sem if): com chuva o app cobra 1.5×. Pergunte "Chovendo? (1 = não, 1.5 = sim)". Casos: 8, 20, 1 → R$ 31.00 · 8, 20, 1.5 → R$ 46.50
//Prompt
let km = Number(prompt("Quantos km?"));
let minutos = Number(prompt("Quantos minutos?"));
let multiplicador = Number(prompt("Chovendo? (1 = não, 1.5 = sim)"));
//Variaveis
const taxaFixa = 5.0;
let precoKm = 2.0;
let precoMinuto = 0.5;
//calculo
let totalBase = taxaFixa + km * precoKm + minutos * precoMinuto;
let totalComChuva = totalBase * multiplicador;

console.log(`Total: R$ ${totalComChuva.toFixed(2)}`);
// N3: divida entre amigos sem sumir centavo (pesquise Math.floor). R$ 31.00 entre 3 → duas pessoas pagam R$ 10.33 e uma paga R$ 10.34
let total = 31.0;
let pessoas = 3;

// 1. Converte o total para centavos inteiros (R$ 31.00 -> 3100 centavos)
let totalCentavos = Math.round(total * 100);

// 2. Calcula a parte inteira mínima em centavos para cada um
let centavosPorPessoa = Math.floor(totalCentavos / pessoas); // Math.floor(3100 / 3) = 1033 centavos

// 3. Descobre a sobra dos centavos que não dividiu igualmente
let sobraCentavos = totalCentavos % pessoas; // 3100 % 3 = 1 centavo de sobra

// 4. Converte de volta para reais
let valorBase = centavosPorPessoa / 100; // R$ 10.33
let valorComSobra = (centavosPorPessoa + 1) / 100; // R$ 10.34

// 5. Exibe quem paga o quê
let pessoasSemSobra = pessoas - sobraCentavos; // 3 - 1 = 2 pessoas
console.log(`${pessoasSemSobra} pessoas pagam R$ ${valorBase.toFixed(2)}`);
console.log(`${sobraCentavos} pessoa paga R$ ${valorComSobra.toFixed(2)}`);
// Rodou? git add corrida.js · git commit -m "feat: calcula o preço da corrida" · git push
