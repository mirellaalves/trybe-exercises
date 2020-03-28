/* 11- Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
Para as faixas de impostos, use as seguintes referências:
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? */

let salarioBruto = 3000;
let salBrutoDescInss;

switch(true) {
    case (salarioBruto < 0):
        console.log('Insira um valor válido (deve ser maior que zero).')
        break;
    case (salarioBruto <= 1556.94):
        salBrutoDescInss = salarioBruto * 0.92;
        break;
    case (salarioBruto <= 2594.92):
        salBrutoDescInss = salarioBruto * 0.91;
        break;
    case (salarioBruto <= 5189.82):
        salBrutoDescInss = salarioBruto * 0.89;
        break;
    case (salarioBruto > 5189.82):
        salBrutoDescInss = salarioBruto - 570.88;
        break;
    default:
        console.log('Insira um valor válido (deve ser maior que zero).')
}

switch(true) {
    case (salBrutoDescInss <= 1903.98):
        console.log('Salário líquido: $' + salBrutoDescInss);
        break;
    case (salBrutoDescInss <= 2826.65):
        console.log('Salário líquido: $' + (salBrutoDescInss * 0.925 + 142.80));
        break;
    case (salBrutoDescInss <= 3751.05):
        console.log('Salário líquido: $' + (salBrutoDescInss * 0.85 + 354.80));
        break;
    case (salBrutoDescInss <= 4664.68):
        console.log('Salário líquido: $' + (salBrutoDescInss * 0.775 + 636.13));
        break;
    case (salBrutoDescInss > 4664.68):
        console.log('Salário líquido: $' + (salBrutoDescInss * 0.725 + 869.36));
}
