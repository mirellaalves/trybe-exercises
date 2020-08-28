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

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 7 Crie um endpoint do tipo GET na rota /simpsons que deve retornar a lista completa de personagens.
const simpsons = 'simpsons.json';

fs.readFile(simpsons, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${simpsons}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});

app.get('/simpsons', (_req, res) => {
  res.status(200).json(data);
});

// 8 Crie um endpoint do tipo GET na rota /simpsons/:id que deve retornar apenas o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, deve ser retornado um array vazio.

app.get('/simpsons/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).send(id);
});

// 9 Crie um endpoint do tipo POST na rota /simpsons que será responsável por cadastrar novos personagens.
// O corpo da requisição deve receber os campos id e name;
// Bônus: A operação só deve ser realizada caso o campo id seja único. Caso contrário, deve ser retornado status 400.
app.post('/simpsons', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  if (!id) {
    res.status(200).json({ id, name });
  } else {
    res.status(400).json({ message: 'Bad Request' });
  }
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000!')
});
