// Utilizando o banco de dados agg_example:
// 3. Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas;
db.clients.aggregate([
  { $match: { State: "Florida" }},
  { $lookup: {
    from: "transactions",
    localField: "name",
    foreignField: "from",
    as: "transactions"
  } }
]).pretty();
