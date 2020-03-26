/* Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada. Escreva testes de modo a entender e testar o comportamento da função e, depois, altere a mesma para que passe nos testes. Use os casos de teste acima como inspiração se tiver dúvidas! */

const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
  
    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        results.push(characters[i]);
      } else {
        results.push('_');
      }
    }
    return results;
  };
  
  
  const parameter = 'Dayane';
  const result = 'D1y2y3';
  /*
    Use a variável parameter como parâmetro da função acima, escreva testes para verificar
    se a mesma está retornando a como se vê na variável result e, caso não esteja, altere
    o código para que ele passe nos testes. Lembre-se: testes pequenos e numerosos! Escreva
    um por vez e vá corrigindo a função aos poucos:
  */
  