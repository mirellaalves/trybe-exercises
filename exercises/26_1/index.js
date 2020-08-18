const readline = require('readline-sync');

function executaCalculo () {
  const peso = readline.questionFloat("Qual o seu peso em kg? (ex.: 82.300) = ").toFixed(3);
  const altura = readline.questionFloat("Qual a sua altura em m? (ex.: 1.75) = ").toFixed(2);
  const IMC = (peso / (altura * altura)).toFixed(2);
  console.log("Seu IMC é %s.", IMC);

  switch (true) {
    case (IMC < 18.5):
      console.log('Você está abaixo do peso (magreza).');
      break;
    case (IMC >= 18.5 && IMC < 25):
      console.log('Você está com o peso normal.');
      break;
    case (IMC >= 25 && IMC < 30):
      console.log('Você está acima do peso (sobrepeso).');
      break;
    case (IMC >= 30 && IMC < 35):
      console.log('Você está com obesidade grau I.');
      break;
    case (IMC >= 35 && IMC < 40):
      console.log('Você está com obesidade grau II.');
      break;
    default:
      console.log('Você está com obesidade grau III ou IV.');
      break;
  };

  const pesoIdealMin = (18.5 * altura * altura).toFixed(1);
  const pesoIdealMax = (24.99999 * altura * altura).toFixed(1);
  console.log("Seu peso ideal é entre %skg e %skg.", pesoIdealMin, pesoIdealMax);
};

executaCalculo();
