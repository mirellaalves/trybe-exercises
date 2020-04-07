/* 2 Retorne o nome do livro de menor nome.
Dica: use a função forEach. */

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Testes:
console.log(books.find(element => element.id === 5).name);
books.forEach(element => {if (element.id === 5) {console.log(element.name)}});
console.log(books.filter(element => element.genre === 'Ficção Científica' || element.genre === 'Fantasia'));
console.log(books.find(book => book.name.length === 26));
console.log(books.sort((a, b) => a.releaseYear - b.releaseYear));
console.log(books.every((book) => book.author.birthYear > 1900 && book.author.birthYear < 2001));
console.log(books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989));
console.log((books.filter(book => book.releaseYear < 1960)).sort((a, b) => a.releaseYear - b.releaseYear));
console.log(books.find(book => (book.author.name.split(' ').filter(word => word.endsWith('.')).length === 3)).name);
