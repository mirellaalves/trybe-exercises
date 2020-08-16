// Utilizando o banco de dados agg_example:
// 2. Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate([
  { $group: {
    _id: "$bank",
    valorTotal: { $sum: "$value"},
    count: { $sum: 1 }
  }}
]);
