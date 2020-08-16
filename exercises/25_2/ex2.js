// Nos exercícios 1 a 8, você utilizará o mesmo pipeline. A ideia é começar com um pipeline pequeno e ir adicionando estágios à medida que você for evoluindo nos exercícios.
// Exercício 2: Utilizando o novo campo idade, conte quantos clientes têm entre 18 e 25 anos.
db.clientes.aggregate([
  { $addFields: {
    idade: 
      { $floor: { $divide: [ { $subtract: [ "$$NOW", "$dataNascimento" ] }, 86400000*365] } }
  } },
  { $match: { idade: { $gte: 18, $lte: 25 } } },
  { $count: "clientesEntre18e25" }
]);
