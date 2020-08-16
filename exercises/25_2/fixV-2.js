// Utilizando o banco de dados storage:
// 2. Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido;
db.products.aggregate([
  { $project: {
    _id: 0,
    name: 1,
    totalProfitSold: { $multiply: [
      { $subtract: [ "$sale_price", { $add: [ "$purchase_price", "$taxes" ]}]},
      "$quantity"
    ]}
  }}
]);
