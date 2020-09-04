// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algo dê errado em nível de código, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK.
// Foque nos contratos das APIs (o que elas devem receber e o que devem retornar).
// Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman e Insomnia.
// 6 Agora você vai criar uma API de listagem dos personagens da série Simpsons. Como fonte de dados, você vai utilizar um arquivo JSON.
// Crie um arquivo chamado simpsons.json e popule com os seguintes dados...

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();

app.use(bodyParser.json());

// 7 Crie um endpoint do tipo GET na rota /simpsons que deve retornar a lista completa de personagens.
const simpsons = 'simpsons.json';

const readFile = async () => {
  try {
    const data = await fs.readFileSync(simpsons, 'utf-8');
    const file = JSON.parse(data);
    return file;
  } catch(err) {
    throw err;
  }
}

app.get('/simpsons', async (_req, res) => {
    const getFile = await readFile();
    res.status(200).send(getFile);
});

// 8 Crie um endpoint do tipo GET na rota /simpsons/:id que deve retornar apenas o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, deve ser retornado um array vazio.

app.get('/simpsons/:id', async (req, res) => {
  const id = req.params.id;
  const file = await readFile();
  const nameAsId = file.find(character => character.id === id);
  res.status(200).send(nameAsId.name);
});  // FALTA RETORNAR ARRAY VAZIO SE ID NÃO EXISTIR

// 9 Crie um endpoint do tipo POST na rota /simpsons que será responsável por cadastrar novos personagens.
// O corpo da requisição deve receber os campos id e name;
// Bônus: A operação só deve ser realizada caso o campo id seja único. Caso contrário, deve ser retornado status 400.

app.post('/simpsons', async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const file = await readFile();
  newData = [...file, { id, name }];
  if (!id || !name) return res.status(400).json({ message: 'Missing Data' });
  const idExists = file.some(character => character.id === id);
  if (idExists) return res.status(400).json({ message: 'Id already exists' });
  fs.writeFile(simpsons, JSON.stringify(newData), (err) => {
    if (err) throw err;
    res.status(200).send('Character created');
  });
});

function generateToken () {
  return crypto.randomBytes(8).toString('hex');
};

const authMiddleware = (req, res, next) => {
  const {token} = req.headers;
  if (token && token.length === 16) return next();
  return res.status(401).json({ message: 'Token inválido!' });
};

app.use('/simpsons', authMiddleware);

app.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const phone = req.body.phone;
  if (email !== '' && password !== '' && firstName !== '' && phone !== '') {
    res.status(200).json({ token: {generateToken} });
  }
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

app.all('*', (_req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000!')
});

// Bônus
// 1 Caso algum endpoint que não consta nessa lista receber uma requisição, a resposta deve voltar com status 404 Not Found, sem corpo.

// 2 Todos os endpoints devem receber um token de autenticação. Esse token deve vir no seguinte modelo: authorization: {token-aqui}. Nesse momento, como você não está salvando os tokens gerados no cadastro em nenhum lugar, só é preciso verificar que as requisições recebem um token no header que possua 16 caracteres.
// Caso o token seja inválido ou inexistente, a resposta deve voltar com status 401 Unauthorized e { message: 'Token inválido!' } no corpo.

// 3 O caminho do endpoint de autenticação deve ser /signup.
// As requisições para esse endpoint deverão utilizar o método POST e devem receber, no corpo da requisição, os campos email, password, firstName e phone.
// Caso todos os requisitos acima sejam atendidos, um token aleatório composto por letras e números, com 16 caracteres, deve ser retornado. Para gerar o token você pode utilizar a função randomBytes, do módulo crypto do node, dessa forma:
// generate-token.js
// const crypto = require('crypto');
// function generateToken () {
//   return crypto.randomBytes(8).toString('hex');
// }
// module.exports = generateToken;
// A resposta da requisição deve ser um objeto com o formato { token: <novo-token-gerado> }.
