// Nos exercícios 1 a 8, você utilizará o mesmo pipeline. A ideia é começar com um pipeline pequeno e ir adicionando estágios à medida que você for evoluindo nos exercícios.
// Exercício 8: Ainda nesse pipeline, descubra os 5 estados com mais compras.
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
  { $limit: 10 },
  { $unwind: "$compras" },
  { $addFields: { "compras.valorComDesconto": { $multiply: [ "$compras.valorTotal", 0.90 ] } } },
  { $group: {
    _id: "$endereco.uf",
    qtdComprasUf: { $sum: 1 }
  }},
  { $sort: { qtdComprasUf: -1 }},
  { $limit: 5 }
]).pretty();


