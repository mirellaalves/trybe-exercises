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

// 1
/*console.log(books
    .filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
    .map(book => book.author.name).sort());*/
//2
//3
/*console.log(books
    .filter(book => book.releaseYear < 1960)
    .map(book => book.name));*/
//4
/*const sumAges = books.reduce((acc, book) => (acc + (book.releaseYear - book.author.birthYear)), 0);
const numOfBooks = books.length;
console.log(sumAges / numOfBooks);*/
//5
console.log(books.reduce((acc, book) => {
    if (acc.name.length > book.name.length) {
      return acc;
    }
    return book;
  }));
//6
//console.log(books.map(book => `${book.name} - ${book.genre} - ${book.author.name}`));
//7
/*console.log(books
    .map(book => ({author: book.author.name, age: book.releaseYear - book.author.birthYear}))
    .sort((a, b) => a.age - b.age));*/
