const express = require('express');
const mysqlx = require('@mysql/xdevapi');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));  // permite o uso do req.body para requisições tipo post

const connection = async () => {  // como o método retorna uma promise, o codeclimate pede que a função seja async
  return mysqlx.getSession({  // conecta ao banco de dados e retorna uma promise
    user: 'root',
    password: '9730',
    host: 'localhost',
    port: 33060,
    schema: 'pretty_cats',
  })
  .then((session) => {
    return session.getSchema('pretty_cats');  // acessa o banco de dados
  })
  .catch((err) => {
    console.error(err);  // retorna uma mensagem de erro
    process.exit(1);  // finaliza a aplicação, mata o processo (boa prática, já que não foi possível executar algo necessário para a aplicação funcionar)
  });
};

// 1o endpoint: busca todos os gatos
app.get('/cats', async (req, res) => {
  try {  // usa um try/catch, pois estamos usando async await (?)
    const db = await connection();
    const results = await db.getTable('cats').select(['name', 'age']).execute();  // query, retorna uma promise

    const cats = results.fetchAll();  // A promise retornada em results é um cursor(?), e para esse cursor a gente diz 'fetchAll' pra buscar todos os resultados de uma vez. Retorna um array com os resultados do banco, um array de gatos.

    const content = cats.reduce((html, cat) => {  // reduce para pegar apenas uma parte do db
      const [name, age] = cat;  // pegando apenas nome e idade do gato no db, onde cada linha é um array,
                                    // contendo nome e idade, por isso é necessário desestruturar.
      return html + `<li>Nome: ${name} - Idade: ${age}</li>`;  // retona um html com uma lista contendo
                                                                // o nome e a idade do gato.
    }, '');

    // responde ao usuário com um html, onde é inserida a lista definida acima
    const htmlBase = `
      <html>
        <head>
          <title>Gatos</title>
        </head>
        <body>
          <ul style="background-color: antiquenhite">
            ${content}
          </ul>
          <form action="/cats" method="POST">
            <input name="name" type="text">
            <input name="age" type="number">
            <button typr="submit">Criar novo gato!</button>
          </form>
        </body>
      </html>
    `;
    res.send(htmlBase);  // (resposta à requisição)
  } catch (err) {
    console.error(err);  // mensagem de erro
    res.status(500).send(`<h2>Erro ao tentar realizar operação</h2>`)  // resposta em caso de erro
  }
});

// Cria uma novo gato
app.post('/cats', async (req, res) => {
  const { name, age } = req.body;  // name e age são os nomes dados aos inputs no html

  if (typeof name !== 'string' || name.length < 3 || name.length >= 38) {
    return res.status(400).send(`<h2>O nome digitado não é válido</h2>`)
  }

  try {
    const db = await connection();  // precisa esperar o banco de dados ser acessado, pois, caso
                                // as outras ações da aplicação executarem antes do db retornar, vai dar erro
    await db  // await pelo mesmo motivo acima (?)
      .getTable('cats')
      .insert(['name', 'age'])
      .values(name, age)
      .execute();
    res.send(`<h2>Gato criado com sucesso</h2>`);
  } catch (error) {
    console.error(error);
    res.status(500).send(`<h2>Erro ao tentar criar o gato</h2>`);
  }
});

// busca um gato pelo seu id
app.get('/cats/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const db = await connection();
    const results = await db
      .getTable('cats')
      .select(['name', 'age'])
      .where('id = :id') // não se pode colocar where como "('id = ${id}')", devido a uma coisa
                         // chamada de 'sql injection' - falha de segurança, o código fica passível de modificação por terceiros mal intensionado, consegue-se inserir um código na query, inclusive deletar a tabela
      .bind('id', id)    // necessário ao indicar o parâmetro como :id (ao invés de ${id}) -
                         // indica que o ":id" vai receber o valor id definido neste mesmo endpoint (linha abaixo do app.get...)
      .execute();

    const cat = results.fetchAll()[0]; // o [0] é pra pegar o primeiro resultado que aparecer

    if (!cat) {
      return res.status(404).send(`<h2>Gato não encontrado  :(</h2>`)
    }

    const [name, age] = cat;
    const content = `<h2>Nome: ${name} - Idade: ${age}</h2>`;
    const htmlBase = `
      <html>
        <head>
          <title>Detalhes</title>
        </head>
        <body>
          <div style="background-color: antiquenhite">
            ${content}
          </div>
        </body>
      </html>
    `;

    res.send(htmlBase);
  } catch (error) {
    console.error(error);
    res.status(500).send(`<h2>Erro ao tentar realizar a operação</h2>`);
  }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

module.exports = connection;
