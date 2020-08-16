// Utilizando o banco de dados storage:
// 1. Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. Lembre-se da quantidade;
db.products.aggregate([
  { $addFields: {
    inStockValue: { $multiply: [ "$sale_price", "$quantity" ] }
  }}
]).pretty();
