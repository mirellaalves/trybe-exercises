// 4 Quando a Promise for rejeitada imprima, via console.log, a frase “É mais de oito mil! Essa promise deve estar quebrada!”

const arrPromise = () => {
  const promise = new Promise((resolve, reject) => {    
    const arr = Array.from({length: 10}, () => Math.floor(Math.random() * 50) + 1);
    const arrSumQuad = arr.map(number => number * number)
                          .reduce((a, b) => a + b, 0);
    (arrSumQuad < 8000) ? resolve(arrSumQuad) : reject('É mais de oito mil! Essa promise deve estar quebrada!')
  });
  
  promise
  .then(sum => console.log([2, 3, 5, 10].map(number => sum / number)))
  .catch(error => console.log(error));
};
    
arrPromise();
