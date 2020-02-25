/* Crie uma função que recebe um array de nomes e retorna o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda. */

let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function maisCaracteres(nomes) {
    let mais = nomes[0];
    let i;

    for (i = 0; i < nomes.length; i++)
    if (nomes[i].length >= mais.length) {
        mais = nomes[i];
    }
    return mais;
}

console.log(maisCaracteres(arrayNomes));