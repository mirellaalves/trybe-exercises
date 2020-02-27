/* Crie uma função que recebe um número inteiro N e retorna o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15. */

let num = 5

function soma(n) {
    let i;
    let s = 0

    for (i = 1; i <= n; i++) {
        s = i + s;
    }
    return s;
}
console.log(soma(num));