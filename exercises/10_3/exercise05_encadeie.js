// 5 Quando a Promise for bem sucedida encadeie nela uma segunda Promise que some os elementos do array.

const arrPromise = () => {
  const promise = new Promise((resolve, reject) => {    
    const arr = Array.from({length: 10}, () => Math.floor(Math.random() * 50) + 1);
    const arrSumQuad = arr.map(number => number * number)
                          .reduce((a, b) => a + b, 0);
    (arrSumQuad < 8000) ? resolve(arrSumQuad) : reject('É mais de oito mil! Essa promise deve estar quebrada!')
  });
    
  promise
  .then(sum => console.log([2, 3, 5, 10].map(number => sum / number)))
  .then(sum2 => console.log(sum2.reduce((c, d) => c + d, 0)))
  .catch(error => console.log(error));
};

arrPromise();
