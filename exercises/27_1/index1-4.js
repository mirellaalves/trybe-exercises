const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());  // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));  // to support URL-encoded bodies

// 1 Crie uma aplicação express que receba uma requisição do tipo GET no caminho /ping e retorne o JSON { "message": "Pong!" }.
app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'Pong!' });
});

// 2 Crie um endpoint que receba requisições do tipo POST no caminho /hello, contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON { "message": "Hello, <nome do usuário>!" };
app.post('/hello', (req, res) => {
  const name = req.body.name;
  res.json({ message: `Hello, ${name}` });
});

// 3 Crie um endpoint que receba requisições do tipo POST no caminho /hello, contendo o JSON { "name": "<nome do usuário>", "age": "<idade do usuário>" }. Caso o usuário tenha idade superior a 17 anos retorne um JSON { "message": "Hello, <nome do usuário>!" } com o status code 200. Caso contrário, retorne o JSON { "message": "Unauthorized"} com o status code 401;
app.post('/hello', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  if (age > 17) {
    res.status(200).json({ message: `Hello, ${name}` });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// 4 Crie um endpoint que receba requisições do tipo PUT no caminho /users/:name/:age e retorne o JSON { "message": "Seu nome é <name> e você tem <age> anos de idade" }.
app.put('/users/:name/:age', (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});
