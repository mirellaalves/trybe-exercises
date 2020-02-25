/*Crie uma função que recebe um array de inteiros e retorna o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.*/

let arrayInteiros = [2, 4, 6, 7, 10, 0, -3];

function menorValor(inteiros) {
    let menorInteiro = inteiros[inteiros.length - 1];
    let menorIndice = inteiros.length - 1;
    let i;

    for (i = inteiros.length - 1; i >= 0; i--) {
        if (inteiros[i] < menorInteiro) {
            menorInteiro = inteiros[i];
            menorIndice = i
        }
    }
    return menorIndice;
}
console.log(menorValor(arrayInteiros));