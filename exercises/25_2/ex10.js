// Exercício 10: Selecione todas as vendas do mês de Março de 2020, com status EM SEPARACAO. Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId, dataVenda e dataEntregaPrevista.
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
