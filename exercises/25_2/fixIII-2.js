// Utilizando o banco de dados storage:
// 2. Retorne o maior número inteiro relativo ao lucro total sobre cada produto;
db.products.aggregate([
  { $project: {
    _id: 0,
    name: 1,
    floor_totalProfit: {
      $floor: { $subtract: [ "$sale_price", { $add: [ "$purchase_price", "$taxes" ] } ] }
    }
  }}
]);
