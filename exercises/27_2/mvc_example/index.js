const connection = require('./models/connection');

connection().then((session) => {
  console.log('Conectado ao MySQL!');
});
