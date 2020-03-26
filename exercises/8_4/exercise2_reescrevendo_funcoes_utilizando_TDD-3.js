/* Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada. Escreva testes de modo a entender e testar o comportamento da função e, depois, altere a mesma para que passe nos testes. Use os casos de teste acima como inspiração se tiver dúvidas! */

const greaterThanTen = (array) => {
    let results = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > 10) {
        results += array[i];
      }
    }
    return results;
  };
  
  const parameter = [4, 10, 32, 9, 21];
  const result = [32, 21];
  /*
    Use a variável parameter como parâmetro da função acima, escreva testes para verificar
    se a mesma está retornando a como se vê na variável result e, caso não esteja, altere
    o código para que ele passe nos testes. Lembre-se: testes pequenos e numerosos! Escreva
    um por vez e vá corrigindo a função aos poucos:
  */
  