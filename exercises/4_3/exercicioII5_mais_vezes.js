/* Crie uma função que recebe um array de inteiros e retorna o inteiro que mais vezes ocorrer.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2. */

let arrayInteiros = [2, 3, 2, 5, 8, 2, 3]

function inteirosMaisVezes(inteiros) {
    let numI = 0;
    let numJ = 0;
    let contnumI = 0;
    let contnumJ = 0;
    let i;
    let j;

    for (i = 0; i < inteiros.length; i++) {
        for (j = 0; j < inteiros.length; i++) {
            if (inteiros[j] === inteiros[i]) {
                contnumI = contnumI +1;
                if (contnumI > contnumJ)
                numI == numJ
            }
        }
    }
    return num;
}