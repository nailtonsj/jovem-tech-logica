const prompt = require("prompt-sync")();
// let saldo = 150;
// let valor = 200;

// if (saldo >= valor) {
//   saldo = saldo - valor;
//   console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));
// } else {
//   console.log("Saldo insuficiente");
// }

// pix.js:o app decide se o Pix sai.
// Nível 1 todo mundo
//Arquivo novo, tela em branco: peça o saldo e o valor com prompt e Number(). Se der, mostre o saltado novo, se não saldo insuficiente
// nível 1 saldo, valor
//150, 200 --> Saldo insuficiente
//150, 150 --> Pix enviado. Saldo: R$ 0.00
//500, 120.5 --> Pix enviado. Saldo: R$ 379.5

let saldo = Number(prompt("Qual é o seu saldo? "));
let valor = Number(prompt("Quanto você quer enviar? "));

if (saldo >= valor) {
  saldo = saldo - valor;
  console.log("Pix enviado com sucesso. Saldo: ", saldo);
} else {
  console.log("Sem saldo suficiente para envio do pix.");
}
