// Exercício 2: Utilizando o estágio $match, escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005.
db.clientes.aggregate([
  { $match: {
    sexo: "FEMININO",
    dataNascimento: {
      $gte: ISODate("1995-01-01T00:00:00Z"),
      $lte: ISODate("2005-12-31T23:59:59Z")
    }
  } }
]);
