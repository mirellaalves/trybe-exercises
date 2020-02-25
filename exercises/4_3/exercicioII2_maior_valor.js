/*Crie uma função que recebe um array de inteiros e retorna o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4. */

let arrayInteiros = [2, 3, 6, 7, 10, 1];

function maiorValor(inteiros) {
    let maiorInteiro = inteiros[0];
    let maiorIndice = 0;
    let i;

    for (i = 1; i < inteiros.length; i++) {
        if (inteiros[i] > maiorInteiro) {
            maiorInteiro = inteiros[i];
            maiorIndice = i
        }
    }
    return maiorIndice;
}
console.log(maiorValor(arrayInteiros));