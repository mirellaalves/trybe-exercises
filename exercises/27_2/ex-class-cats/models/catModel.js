const mysqlx = require('@mysql/xdevapi');

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

const getAll = async () =>
  connection()
    .then((db) => db.getTable('cats').select(['name', 'age']).execute())  // query, retorna uma promise
    .then((results) => results.fetchAll())  // A promise retornada em results é um cursor(?), e para esse cursor a gente diz 'fetchAll' pra buscar todos os resultados de uma vez. Retorna um array com os resultados do banco, um array de gatos.
    .then((cats) => cats.map(([name, age]) => ({ name, age })));  // pego o array retornado pelo fetchAll e transformo em objeto, para normalizar a aplicação, definindo que o resultado que veio do banco de dados, independente de ter vindo de um mysql, ou mongo ou api, sempre vi ser um objeto.

const getCatById = async (id) =>
  connection()
    .then((db) =>
      db
        .getTable('cats')
        .select(['name', 'age'])
        .where('id = :id') // não se pode colocar where como "('id = ${id}')", devido a uma coisa
                            // chamada de 'sql injection' - falha de segurança, o código fica passível de modificação por terceiros mal intensionado, consegue-se inserir um código na query, inclusive deletar a tabela
        .bind('id', id)    // necessário ao indicar o parâmetro como :id (ao invés de ${id}) -
                            // indica que o ":id" vai receber o valor id definido neste mesmo endpoint (linha abaixo do app.get...)
        .execute()
    )
    .then((results) => results.fetchAll()[0]) // o [0] é pra pegar o primeiro resultado que aparecer
    .then(([name, age]) => ({ name, age }));  // como results retorna só um gato, não precisa fazer o map, é só transformar direto o array em objeto

const add = (name, age) =>
  connection()
    .then((db) =>
      db
      .getTable('cats')
      .insert(['name', 'age'])
      .values(name, age)
      .execute()
    )

const isValid = (name, age) =>  // regra de negócio, fica no model
  typeof name === 'string' &&
  name.length >= 3 &&
  name.length <= 30 &&
  age &&
  age > 0;


module.exports = {
  // connection, // não se exporta a conextion aqui, pois ela não vai aconteer em nenhum outro lugar, ela tem ficar apenas no model.
  getAll,
  getCatById,
  add,
  isValid,
};
