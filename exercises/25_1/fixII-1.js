// Utilizando o banco de dados agg_example:
// 1. Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  { $lookup: {
    from: "transactions",
    localField: "name",
    foreignField: "from",
    as: "transactions"
  } }
]).pretty();
