// Utilizando o banco de dados agg_example:
// 2. Selecione todas as transações com o valor entre 700 e 6000, ou que seja recebida pela cliente "Lisa Simpson";
db.transactions.aggregate([
  { $match: { $or: [
    { value: { $gte: 700, $lte: 6000 } },
    { to: "Lisa Simpson" }
  ] } }
]).pretty();
