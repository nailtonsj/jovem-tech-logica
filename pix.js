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

// let saldo = Number(prompt("Qual é o seu saldo? "));
// let valor = Number(prompt("Quanto você quer enviar? "));

// if (saldo >= valor) {
//   saldo = saldo - valor;
//   console.log("Pix enviado com sucesso. Saldo: ", saldo);
// } else {
//   console.log("Sem saldo suficiente para envio do pix.");
// }

//N2
//Peça tambem a hora( 0 a 23). Das 20h em diante, Pix acima de 1000,00 é bloqueado.
//saldo, valor, hora
//5000, 1500, 14 -> Pix enviado. Saldo: R$ 3500.00
//5000, 1500, 21 -> Bloqueado. limite noturno
//5000, 800, 21 -> Pix enviado. Saldo: R$ 4200.00

let saldo = Number(prompt("Qual é o seu saldo? "));
let valor = Number(prompt("Quanto você quer enviar? "));
let hora = Number(prompt("Que horas são? "));
let limite = 1000;

// 2. Validação do Limite Noturno (a partir das 20h e valor > 1000)
if (hora >= 20 && valor > 1000) {
  console.log("Bloqueado: limite noturno");
}
// 3. Validação do Saldo
else if (valor > saldo) {
  console.log("Saldo insuficiente");
}
// 4. Sucesso
else {
  const novoSaldo = saldo - valor;
  console.log(`Pix enviado. Saldo: R$ ${novoSaldo.toFixed(2)}`);
}
