// Utilizando o banco de dados agg_example:
// 3. Selecione 3 transações com o valor acima de 1000;
db.transactions.aggregate([
  { $match: { value: { $gt: 1000 } } },
  { $limit: 3 }
]).pretty();
