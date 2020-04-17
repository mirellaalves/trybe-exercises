// 6 Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
new Promise((resolve, reject) => {
    setTimeout(() => {
    const arrayAnimals = Animals.filter((animal) => animal.type === type);
    if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
    }

    return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
})
);

const getListAnimals = (type) => (
findAnimalsByType(type).then(list => list)
);

// 6.2 Adicione uma nova funcionalidade para buscar pela a idade dos animais, o retorno deve ser um array de objetos, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

module.exports = sum