const connection = require("./connection");

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

// Busca todos os autores do banco.

const getAll = async () =>
  connection()
    .then((db) =>
      db
        .getTable("authors")
        .select(["id", "first_name", "middle_name", "last_name"])
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((authors) =>
        authors.map(([id, firstName, middleName, lastName]) =>
          getNewAuthor({
            id,
            firstName,
            middleName,
            lastName,
          })
        )
    );

/**
 * Busca um autor específico, a partir do seu ID
 * @param {String} id ID do autor a ser recuperado
 */
const findById = async (id) => {
  const authorData = await connection()
    .then((db) =>
      db
        .getTable('authors')
        .select(['first_name', 'middle_name', 'last_name'])
        .where('id = :id')
        .bind('id', id)
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((authors) => authors[0]);

  if (!authorData) return null;

  const [firstName, middleName, lastName] = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
};

// Retorna um boolean indicando se os dados são válidos, checando se firstName e lastName são strings não vazias, e se middleName, caso seja informado, é uma string.
const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

// Salva um autor no banco, utilizando os métodos insert e values. insert, assim como select, recebe um array de strings com os nomes das colunas, enquanto values recebe os valores a serem inseridos.
const create = async (firstName, middleName, lastName) =>
  connection().then((db) =>
    db
      .getTable('authors')
      .insert(['first_name', 'middle_name', 'last_name'])
      .values(firstName, middleName, lastName)
      .execute()
  );

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
