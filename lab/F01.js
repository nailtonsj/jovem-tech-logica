/*
Nível: Fácil · Conteúdos que podem aparecer: Operadores, prompt e Number
O problema
Dado um número inteiro positivo, mostre o último algarismo dele, o das unidades.
Entrada
Um número inteiro N, com 1 ≤ N ≤ 1.000.000, lido do teclado.
Saída
Uma linha com o último algarismo de N.
Exemplos
Exemplo 1
Entrada:
1234
Saída:
4
Exemplo 2
Entrada:
7
Saída:
7
Exemplo 3
Entrada:
90
Saída:
0
Entrega
No seu repositório modulo-js-logica, crie o arquivo lab/F01.js.
Rode cada exemplo. A saída tem de ser igual, letra por letra.
git add lab/F01.js · git commit -m "feat: lab F01" · git push
Comente neste cartão o print do commit aberto no GitHub e mova o cartão para Feito.
*/
const prompt = require("prompt-sync")();
let numeroNatural = prompt("Digite um número inteiro entre 1 a 1.000.000 "); //Entrada
let ultimoAlgarismo = Number(numeroNatural[numeroNatural.length - 1]); //Processando
console.log(ultimoAlgarismo); // Saída
