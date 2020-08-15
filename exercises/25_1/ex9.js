// Exercício 9: Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019.
db.vendas.aggregate([
  { $match: { 
    status: { $in: [ "ENTREGUE", "EM SEPARACAO" ] }, 
    dataVenda: {
      $gte: ISODate("2019-01-01T00:00:00Z"),
      $lte: ISODate("2019-12-31T23:59:59Z")
    } 
  } },
  { $group: {
    _id: { clienteId: "$clienteId" },
    valorTotal: { $sum: "$valorTotal" }
  }},
  { $sort: { valorTotal: -1 }},
  { $limit: 10 }
]).pretty();
