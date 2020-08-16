// Utilizando o banco de dados agg_example:
// 1. Selecione todos os bancos;
db.transactions.aggregate([
  { $group: {
    _id: "$bank"
  }}
]);
