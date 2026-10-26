// Pense: a conta de luz é kWh × R$ 0,80 + taxa fixa de R$ 12,00. O que é const (caixa com cadeado) e o que é let (caixa aberta)?
// Código: crie luz.js com o consumo numa variável. Com 150 kWh, a saída tem que ser Conta: R$ 132.00.
// Sem if: na bandeira vermelha, cada kWh custa R$ 0,10 a mais. Use uma variável adicional (0 ou 0.10). Com 150 kWh na bandeira vermelha: Conta: R$ 147.00.
// Explique em 2 linhas: por que a taxa é caixa com cadeado e o consumo é caixa aberta?

// Valores fixos (cadeado)
const taxaFixa = 12.0;
const precoKwhBase = 0.8;

// Valores variáveis (caixa aberta)
let consumoKwh = 150;
let adicionalBandeira = 0; // 0 para bandeira normal, 0.10 para bandeira vermelha

// Cálculo da conta
let valorTotal = consumoKwh * (precoKwhBase + adicionalBandeira) + taxaFixa;
console.log(`Conta: R$ ${valorTotal.toFixed(2)}`);

// A taxa fixa é uma caixa com cadeado (`const`) porque o valor cobrado pela distribuidora é constante e não deve ser alterado por engano durante a execução do programa. 
// Já o consumo é uma caixa aberta (`let`) porque varia a cada mês dependendo do uso de energia da residência.