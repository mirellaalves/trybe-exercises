/* 10- Escreva um programa que, dado o custo de um produto e seu valor de venda, calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20% que deve ser considerado no cálculo do lucro.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero. */ 

let cost = 200;
let price = 320;
let profit_1k = (price - cost * 1.2) * 1000;

if (cost < 0 || price < 0) {
    console.log("Inválido. Revise os valores informados.");
}
else {
    console.log(profit_1k);
}
