// Utilizando o banco de dados agg_example:
// 4. Selecione os bancos que tem o valor total de transações maior que 1000;
db.transactions.aggregate([
  { $group: {
    _id: "$bank",
    valorTotal: { $sum: "$value"},
  }},
  { $match: { valorTotal: { $gt: 1000 }}}
]);
