const express = require('express');
const bodyParser = require('body-parser');
const catController = require('./controllers/catController');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));  // permite o uso do req.body para requisições tipo post

// 1o endpoint: busca todos os gatos
app.get('/cats', catController.listCats);

// 2o endpoint: cria uma novo gato
app.post('/cats', catController.newCat);

// 3o endpoint: busca um gato pelo seu id
app.get('/cats/:id', catController.catDetails);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
