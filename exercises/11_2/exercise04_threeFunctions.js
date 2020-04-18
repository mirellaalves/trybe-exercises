// 4 Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const upperCase = (str1) => str1.toUpperCase();
const firstLetter = (str2) => str2.charAt(0);
const concatStr = (str3, str4) => str3.concat(str4);

module.exports = { upperCase, firstLetter, concatStr };
