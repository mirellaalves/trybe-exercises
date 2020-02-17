let cost = 200;
let price = 320;
let profit_1k = (price - (cost + (0.2 * cost))) * 1000;

if (cost < 0 || price < 0) {
    console.log("Inválido. Revise os valores informados.");
}
else {
    console.log(profit_1k);
}
