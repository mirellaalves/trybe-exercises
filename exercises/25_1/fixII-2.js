// Utilizando o banco de dados agg_example:
// 2. Selecione 4 clientes com as suas respectivas transações recebidas;
db.clients.aggregate([
  { $lookup: {
    from: "transactions",
    localField: "name",
    foreignField: "from",
    as: "transactions"
  } },
  { $limit: 4 }
]).pretty();
