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
module.exports = {
  getAll,
};
