// Exercício 12: Descubra qual as três ufs que mais compraram no ano de 2020. Retorne os documentos no seguinte formato:
// {
//   "totalVendas": 10,
//   "uf": "SP"
// }
db.vendas.aggregate([
  { $match: { dataVenda: {
      $gte: ISODate("2020-01-01T00:00:00Z"),
      $lte: ISODate("2020-12-31T23:59:59Z")
  } } },
  { $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "dadosCliente"
  } },
  { $unwind: "$dadosCliente" },
  { $group: {
    _id: "$dadosCliente.endereco.uf",
    totalVendas: { $sum: 1 }
  } },
  { $sort: { totalVendas: -1 } },
  { $limit: 3 },
  { $project: { _id: 0, totalVendas: 1, uf: "$_id" } }
]);
