// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let gs = 27895;
let gs_disc_in;

switch (true) {
    case gs <= 1556.94:
    gs_disc_in = gs * 0.92;
    break;

    case gs <= 2594.92:
    gs_disc_in = gs * 0.91;
    break;

    case gs <= 5189.82:
    gs_disc_in = gs * 0.89;
    break;

    default:
    gs_disc_in = gs - 570.88;
}

switch (true) {
    case gs_disc_in <= 1903.98:
    console.log (gs_disc_in);
    break;

    case gs_disc_in <= 2826.65:
    console.log (gs_disc_in * 0.925 + 142.80);
    break;

    case gs_disc_in <= 3751.05:
    console.log (gs_disc_in * 0.85 + 354.80);
    break;

    case gs_disc_in <= 4664.68:
    console.log (gs_disc_in * 0.775 + 636.13);
    break;

    default:
    console.log (gs_disc_in * 0.725 + 869.36);
}