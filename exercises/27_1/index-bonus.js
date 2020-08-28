const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const authMiddleware = (req, res, next) => {
  if (req.headers.authorization) return next();
  return res.status(401).json({ message: 'Token inválido!' });
};

app.use(authMiddleware);

function generateToken () {
  return crypto.randomBytes(16).toString('hex');
}

app.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const phone = req.body.phone;
  if (email !== '' && password !== '' && firstName !== '' && phone !== '') {
    res.status(200).json({ token: {generateToken} });
  }
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
