// Utilizando o banco de dados agg_example:
// 3. Selecione o valor total de transações;
db.transactions.aggregate([
  { $group: {
    _id: null,
    valorTotal: { $sum: "$value"},
  }}
]);
