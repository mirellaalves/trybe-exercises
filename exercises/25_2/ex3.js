// Nos exercícios 1 a 8, você utilizará o mesmo pipeline. A ideia é começar com um pipeline pequeno e ir adicionando estágios à medida que você for evoluindo nos exercícios.
// Exercício 3: Remova o estágio $count do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras.
db.clientes.aggregate([
  { $addFields: {
    idade: 
      { $floor: { $divide: [ { $subtract: [ "$$NOW", "$dataNascimento" ] }, 86400000*365] } }
  } },
  { $match: { idade: { $gte: 18, $lte: 25 } } },
  { $lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
  } }
]).pretty();
