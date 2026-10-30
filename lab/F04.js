// Descrição
// Nível: Fácil · Conteúdos que podem aparecer: if / else, Operadores
// O problema
// Diga se um número inteiro é par ou ímpar.
// Entrada
// Um inteiro N (0 ≤ N ≤ 1.000.000).
// Saída
// Uma linha: par ou ímpar, em minúsculas.
// Exemplos
// Exemplo 1
// Entrada:
// 8
// Saída:
// par
// Exemplo 2
// Entrada:
// 13
// Saída:
// ímpar
// Exemplo 3
// Entrada:
// 0
// Saída:
// par
// Entrega
// No seu repositório modulo-js-logica, crie o arquivo lab/F04.js.
// Rode cada exemplo. A saída tem de ser igual, letra por letra.
// git add lab/F04.js · git commit -m "feat: lab F04" · git push
// Comente neste cartão o print do commit aberto no GitHub e mova o cartão para Feito.

//Importação
const prompt = require("prompt-sync")();

// entrada
let n = Number(prompt("Digite um número inteiro e positivo. "));
//Processamento
let resultado =
  n % 2 === 0
    ? `O número digitado "${n}" é par`
    : `O número digitado "${n}" é impar`;
//saída
console.log(resultado);
