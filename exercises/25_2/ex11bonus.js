// Bonus
// Exercício 11: Calcule a diferença absoluta em dias entre a data da primeira entrega prevista e a última, considerando o pipeline do exercício 10.
db.vendas.aggregate([
  { $match: {
    dataVenda: {
      $gte: ISODate("2020-03-01T00:00:00Z"),
      $lte: ISODate("2020-03-31T23:59:59Z")
    },
    status: "EM SEPARACAO"
  }},
  { $addFields: {
    dataEntregaPrevista: { $add: [ "$dataVenda", 86400000*3 ]}
  }},
  { $project: {
    _id: 0,
    clienteId: 1,
    dataVenda: 1,
    dataEntregaPrevista: 1
  } }
]).pretty();
