// Nos exercícios 1 a 8, você utilizará o mesmo pipeline. A ideia é começar com um pipeline pequeno e ir adicionando estágios à medida que você for evoluindo nos exercícios.
// Exercício 5: Confira o número de documentos retornados pelo pipeline com o método itcount(). Até aqui você deve ter 486 documentos sendo retornados.
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
  } },
  { $match: { "compras.dataVenda": {
    $gte: ISODate("2019-06-01T00:00:00Z"),
    $lte: ISODate("2020-03-31T23:59:59Z")
  }}}
]).itcount();
// 73 - Considerando o match "idade"
// 486 - Retirando o match "idade"
