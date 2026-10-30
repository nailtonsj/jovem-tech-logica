const controleDeJogo = {
  jogando: true,
  combate: false,
};

// const heroi = {
//   nome: "Magno",
//   vida: 10,
//   dano: 3,
//   veneno: 0,
//   critico: 0.2,
//   danoCritico: 2,
//   inventario: [],
// };

// const aranha = {
//   nome: "aranha da caverna",
//   vida: 10,
//   dano: 3,
//   chanceVeneno: 0.4,
//   veneno: 3,
// };

// console.log(heroi.vida);
// heroi.vida = 15;
// heroi = 15; // erro de constante sendo mudada (TypereError: Assigment to constant variable.)
// console.log(heroi.vida);

function tomarDano(heroi, inimigo) {
  heroi.vida = heroi.vida - dano;
  if (heroi.vida <= 0) {
    console.log("Foi ver se no céu tem pão");
    combate = false;
    jogo = false;
  }
}

function combate(heroi, inimigo) {
  tomarDano(heroi, inimigo);
}
combate(heroi, aranha);
