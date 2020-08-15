// Exercício 11: Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020.
db.vendas.aggregate([
  { $match: { 
    status: { $in: [ "ENTREGUE", "EM SEPARACAO" ] }, 
    dataVenda: {
      $gte: ISODate("2020-01-01T00:00:00Z"),
      $lte: ISODate("2020-03-31T23:59:59Z")
    } 
  } },
  { $group: {
    _id: "$clienteId",
    nCompras: { $sum: 1 }
  }},
  { $match: { nCompras: { $lt: 3 }}},
  { $count: "clientes"}
]);
