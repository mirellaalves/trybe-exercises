/* Crie uma função que recebe uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre sera menor que a string word.
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be");
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false */

let palavraMaior = "trybe";
let palavraMenor = "be";

function verificaFimPalavra(stringMaior, stringMenor) {
    let stringMaior = "";
    let stringMenor = "";
    let i;
    let j;

    for (i = stringMaior.length-1; i >= 0; i--) {
    }
    for (j = stringMenor.length-1; j >= 0; j--) {
    }
    if (stringMaior[i] == stringMenor[j]) {
        return true;
    }
    else {
        return false;
    }
}
console.log(verificaFimPalavra(palavraMaior, palavraMenor));