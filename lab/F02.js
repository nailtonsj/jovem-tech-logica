// Nível: Fácil · Conteúdos que podem aparecer: Operadores, prompt e Number
// O problema
// Um relógio marca H horas e M minutos. Quantos minutos se passaram desde a meia-noite?
// Entrada
// Dois inteiros, lidos um por vez: H (0 ≤ H ≤ 23) e M (0 ≤ M ≤ 59).
// Saída
// Uma linha com o total de minutos.
// Exemplos
// Exemplo 1
// Entrada:
// 13
// 45
// Saída:
// 825
// Exemplo 2
// Entrada:
// 0
// 0
// Saída:
// 0
// Exemplo 3
// Entrada:
// 23
// 59
// Saída:
// 1439
// Entrega
// No seu repositório modulo-js-logica, crie o arquivo lab/F02.js.
// Rode cada exemplo. A saída tem de ser igual, letra por letra.
// git add lab/F02.js · git commit -m "feat: lab F02" · git push
// Comente neste cartão o print do commit aberto no GitHub e mova o cartão para Feito.
const prompt = require("prompt-sync")();
// 1hora = 60 minutos
// numero de horas * 60 para encontrar os minutos. Depois só somar com os minutos.
let horas = Number(prompt("Digite o horário entre 0 e 23 "));
let minutos = Number(prompt("Digite os minutos entre 0 e 59 "));

let totalMinutos = horas * 60 + minutos;
console.log("O total de minutos é:", totalMinutos);
