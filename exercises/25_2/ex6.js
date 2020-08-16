// Nos exercícios 1 a 8, você utilizará o mesmo pipeline. A ideia é começar com um pipeline pequeno e ir adicionando estágios à medida que você for evoluindo nos exercícios.
// Exercício 6: Deixe apenas os top 10 clientes com mais compras nesse período.
// Aqui retirei o $match idade, conforme considerado no exercício anterior, conforme gabarito.
db.clientes.aggregate([
  { $addFields: {
    idade: 
      { $floor: { $divide: [ { $subtract: [ "$$NOW", "$dataNascimento" ] }, 86400000*365] } }
  } },
  { $lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
  } },
  { $match: { "compras.dataVenda": {
    $gte: ISODate("2019-06-01T00:00:00Z"),
    $lte: ISODate("2020-03-31T23:59:59Z")
  }}},
  { $addFields: { qtdCompras: { $size: "$compras" } } },
  { $sort: { qtdCompras: -1 }},
  { $limit: 10 }
]).pretty();
