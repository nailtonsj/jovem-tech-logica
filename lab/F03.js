// Nível: Fácil · Conteúdos que podem aparecer: Operadores, prompt e Number

// O problema
// Uma granja embala ovos em caixas de 12. Toda caixa sai cheia; o que não completa uma caixa fica solto. Dado o número de ovos, quantas caixas saem e quantos ovos ficam soltos?

// Entrada
// Um inteiro N (0 ≤ N ≤ 100.000), o número de ovos.

// Saída
// Duas linhas: Caixas: X e Soltos: Y.

// Exemplos
// Exemplo 1

// Entrada:
// 30
// Saída:
// Caixas: 2
// Soltos: 6
// Exemplo 2

// Entrada:
// 12
// Saída:
// Caixas: 1
// Soltos: 0
// Exemplo 3

// Entrada:
// 5
// Saída:
// Caixas: 0
// Soltos: 5
// Entrega
// No seu repositório modulo-js-logica, crie o arquivo lab/F03.js.

// Rode cada exemplo. A saída tem de ser igual, letra por letra.

// git add lab/F03.js · git commit -m "feat: lab F03" · git push

// Comente neste cartão o print do commit aberto no GitHub e mova o cartão para Feito.

const prompt = require("prompt-sync")();

const quantidadeOvos = Number(prompt("Quantas unidades de ovos? "));

const caixas = Math.floor(quantidadeOvos / 12);
const soltos = quantidadeOvos % 12;

console.log(`Caixas: ${caixas}`);
console.log(`Soltos: ${soltos}`);
