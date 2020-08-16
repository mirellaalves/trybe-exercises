// Utilizando o banco de dados storage:
// 1. Retorne o menor número inteiro relativo ao preço de venda de cada produto;
db.products.aggregate([
  { $project: {
    _id: 0,
    name: 1,
    ceiling_sale_price: { $ceil: "$sale_price" }
  }}
]);
