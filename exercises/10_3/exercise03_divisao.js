// 3 Quando a promise (do exercicio 02) for resolvida com sucesso retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

const arrPromise = () => {
  const promise = new Promise((resolve, reject) => {    
    const arr = Array.from({length: 10}, () => Math.floor(Math.random() * 50) + 1);
    const arrSumQuad = arr.map(number => number * number)
                          .reduce((a, b) => a + b, 0);
    (arrSumQuad < 8000) ? resolve(arrSumQuad) : reject('Maior que 8000')
  });

  promise
  .then(sum => console.log([2, 3, 5, 10].map(number => sum / number)))
  .catch(error => console.log(error));
};
  
arrPromise();
