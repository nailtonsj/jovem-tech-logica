// Aluno 1
let nome1 = "Ana";
let media1 = 8.5;
if (media1 >= 7) {
  console.log(`${nome1}: Aprovado`);
} else {
  console.log(`${nome1}: Reprovado`);
}

// Aluno 2
let nome2 = "Bruno";
let media2 = 5.0;
if (media2 >= 7) {
  console.log(`${nome2}: Aprovado`);
} else {
  console.log(`${nome2}: Reprovado`);
}

// Aluno 3
let nome3 = "Carla";
let media3 = 7.0;
if (media3 >= 7) {
  console.log(`${nome3}: Aprovado`);
} else {
  console.log(`${nome3}: Reprovado`);
}

// Aluno 4
let nome4 = "Diego";
let media4 = 6.5;
if (media4 >= 7) {
  console.log(`${nome4}: Aprovado`);
} else {
  console.log(`${nome4}: Reprovado`);
}

// Aluno 5
let nome5 = "Elena";
let media5 = 9.0;
if (media5 >= 7) {
  console.log(`${nome5}: Aprovado`);
} else {
  console.log(`${nome5}: Reprovado`);
}

// Aluno 6
let nome6 = "Fábio";
let media6 = 4.0;
if (media6 >= 7) {
  console.log(`${nome6}: Aprovado`);
} else {
  console.log(`${nome6}: Reprovado`);
}
//Nova Regra
// Aluno 1
// let nome1 = "Ana";
// let media1 = 8.5;
// if (media1 >= 6) {
//   console.log(`${nome1}: Aprovado`);
// } else {
//   console.log(`${nome1}: Em recuperação`);
// }

// // Aluno 2
// let nome2 = "Bruno";
// let media2 = 5.0;
// if (media2 >= 6) {
//   console.log(`${nome2}: Aprovado`);
// } else {
//   console.log(`${nome2}: Em recuperação`);
// }

// // Aluno 3
// let nome3 = "Carla";
// let media3 = 7.0;
// if (media3 >= 6) {
//   console.log(`${nome3}: Aprovado`);
// } else {
//   console.log(`${nome3}: Em recuperação`);
// }

// // Aluno 4
// let nome4 = "Diego";
// let media4 = 6.5;
// if (media4 >= 6) {
//   console.log(`${nome4}: Aprovado`);
// } else {
//   console.log(`${nome4}: Em recuperação`);
// }

// // Aluno 5
// let nome5 = "Elena";
// let media5 = 9.0;
// if (media5 >= 6) {
//   console.log(`${nome5}: Aprovado`);
// } else {
//   console.log(`${nome5}: Em recuperação`);
// }

// // Aluno 6
// let nome6 = "Fábio";
// let media6 = 4.0;
// if (media6 >= 6) {
//   console.log(`${nome6}: Aprovado`);
// } else {
//   console.log(`${nome6}: Em recuperação`);
// }

// Quantas linhas foram alteradas?
// Foram alteradas 12 linhas no total. Em cada um dos 6 blocos, foi necessário trocar o número 7 por 6 (6 linhas) e a palavra "Reprovado" por "Em recuperação" (6 linhas).

// 4. Investigação: Como escrever o bloco uma única vez?
// Sim, dá para evitar essa repetição toda usando duas ferramentas fundamentais em programação: Funções e Laços de Repetição (Loops).

// Função (function): Serve para agrupar uma lógica (o bloco do if/else) e dar um nome a ela. Em vez de escrever o if 6 vezes, você cria uma "fórmula" chamada, por exemplo, verificarStatus(nome, media). Toda vez que você chama essa função passando os dados de um aluno, ela executa aquele trecho de código para você.

// Array (Lista) + Laço de Repetição (for ou forEach): Em vez de criar variáveis soltas (nome1, nome2, etc.), você coloca todos os alunos juntos em uma única lista. O laço de repetição vai percorrer essa lista, pegar um aluno por vez e mandar a função processá-lo.

// Por que isso ajuda?
// Se a regra mudar de novo amanhã, você só altera uma linha de código dentro da função, e todos os alunos (sejam 6 ou 10.000) serão calculados com a regra atualizada automaticamente.

//exemplo
// 1. A FUNÇÃO: Contém a regra de negócio em um único lugar
// function verificarStatus(aluno) {
//   if (aluno.media >= 6) {
//     return `${aluno.nome}: Aprovado`;
//   } else {
//     return `${aluno.nome}: Em recuperação`;
//   }
// }

// // 2. O ARRAY (LISTA): Guarda todos os alunos de forma organizada
// const alunos = [
//   { nome: "Ana", media: 8.5 },
//   { nome: "Bruno", media: 5.0 },
//   { nome: "Carla", media: 7.0 },
//   { nome: "Diego", media: 6.5 },
//   { nome: "Elena", media: 9.0 },
//   { nome: "Fábio", media: 4.0 },
// ];

// // 3. O LOOP: Executa a função para cada item da lista (sem repetir código)
// alunos.forEach((aluno) => {
//   console.log(verificarStatus(aluno));
// });
