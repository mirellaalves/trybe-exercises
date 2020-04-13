// 2 Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela você deve produzir um array com dez números aleatórios de 1 a 50, elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
// Tente usar Higher Order Functions! Lembre-se que tanto uma quanto a outra recebem, como parâmetro, funções!

const arrPromise = () => {
  // instanciar uma promise:
  const promise = new Promise((resolve, reject) => {    
    const arr = Array.from({length: 10}, () => Math.floor(Math.random() * 50) + 1); // cria o array com 10 números aleatórios de 1 a 50.
    const arrSumQuad = arr.map(number => number * number) // eleva todos os elementos do array ao quadrado.
                          .reduce((a, b) => a + b, 0); // soma todos os elementos do array já elevados ao quadrado - Do resultado do "arr.map", se aplica o ".reduce".
    (arrSumQuad < 8000) ? resolve(arrSumQuad) : reject('Maior que 8000') // é o 'result' da função.
  });
  promise
  .then(sum => console.log(sum))
  .catch(error => console.log(error));
};

arrPromise();
