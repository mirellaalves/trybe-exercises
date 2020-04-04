/* Crie uma função que receba uma frase e retorne qual a maior palavra.

Exemplo:
      longestWord("Antônio foi ao banheiro e não sabemos o que aconteceu") // retorna 'aconteceu' */

const longestWord = (phrase) => {
      phraseArr = phrase.split(' ');
      i = 0;
      for (word of phraseArr) {
            if (word.length > i) {
                  i = word.length;
                  result = word;
            }
      }
      return result
}
console.log(longestWord("Antônio foi ao banheiro e não sabemos o que aconteceu"));
