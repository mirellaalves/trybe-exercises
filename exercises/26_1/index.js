const readline = require('readline-sync');

// IMC = peso / altura * altura

function executaCalculo () {
  const peso = readline.questionFloat("Qual o seu peso em kg? (ex.: 82.300) ").toFixed(3);
  const altura = readline.questionFloat("Qual a sua altura em m? (ex.: 1.75) ").toFixed(2);
}

executaCalculo();
