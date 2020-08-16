// Nos exercícios 1 a 8, você utilizará o mesmo pipeline. A ideia é começar com um pipeline pequeno e ir adicionando estágios à medida que você for evoluindo nos exercícios.
// Exercício 1: Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes. Algumas dicas:
// arredonde para baixo o valor da idade;
// calcule a idade usando a diferença entre a data corrente e a data de nascimento;
// 1 dia é igual a 86400000 milissegundos.
db.clientes.aggregate([
  { $addFields: {
    idade: 
      { $floor: { $divide: [ { $subtract: [ "$$NOW", "$dataNascimento" ] }, 86400000*365] } }
  } }
]).pretty();
