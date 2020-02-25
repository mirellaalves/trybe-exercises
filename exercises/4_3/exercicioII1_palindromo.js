/* Crie uma função que recebe uma string e retorna true se é um palíndromo ou false se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false */

    let palavra = "arara"

function palindromo(string) {

    let stringVerso = string
    let i;
    let j;

    for (i = 0; i <= string.length - 1; i++) {
        string[i];
    }

    for (j = stringVerso.length -1; j >= 0; j--) {
        stringVerso[j];
    }

    if (string[i] = stringVerso[j]) {
        return true;
    }
    else {
        return false;
    }
}
console.log(palindromo(palavra));    
