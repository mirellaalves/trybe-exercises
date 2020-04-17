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

// 6.1 6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.
// Dica, use o código usado como exemplo para criar uma nova função, analise os testes antes de iniciar.

const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
    // Adicione o código aqui.
)

const getAnimal = (name) => {
    // Adicione o código aqui.
}
// ---------------------

describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
    });
    });

    describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
        );
    });
    });
});
      
  
      
  module.exports = sum