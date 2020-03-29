/* No xadrez, a rainha pode se mover quantas casas quiser na vertical, na horizontal ou na diagonal.
Neste exercício, verificaremos se o ataque da Rainha à peça foi bem sucedido. */

/* Posicao inicial da Rainha */
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

let posicaoPecaLinha = 6;
let posicaoPecaColuna = 2;

let ataqueFeito = false;

/* Movimento Horizontal ou Vertical */
if (posicaoRainhaLinha === posicaoPecaLinha || posicaoRainhaColuna === posicaoPecaColuna) {
    ataqueFeito = true;
}

/* Movimento Diagonal Superior Direita */
for (let i = 1; i < 8; i += 1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhaColuna + i;
    if (linhaRainha > 8 || colunaRainha > 8) {
        break;
    }
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
if (ataqueFeito) {
    console.log('Parabens para a Rainha!');
} else {
    console.log('Não foi dessa vez');
}


/* Movimento Diagonal Inferior Esquerda */
for (let i = 1; i < 8; i += 1) {
    let linhaRainha = posicaoRainhaLinha - i;
    let colunaRainha = posicaoRainhaColuna - i;
    if (linhaRainha < 1 || colunaRainha < 1) {
        break;
    }
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
if (ataqueFeito) {
    console.log('Parabens para a Rainha!');
} else {
    console.log('Não foi dessa vez');
}


/* Movimento Diagonal Superior Esquerda */
for (let i = 1; i < 8; i += 1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhaColuna - i;
    if (linhaRainha > 8 || colunaRainha < 1) {
        break;
    }
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
if (ataqueFeito) {
    console.log('Parabens para a Rainha!');
} else {
    console.log('Não foi dessa vez');
}


/* Movimento Diagonal Inferior Direita */
for (let i = 1; i < 8; i += 1) {
    let linhaRainha = posicaoRainhaLinha - i;
    let colunaRainha = posicaoRainhaColuna + i;
    if (linhaRainha < 1 || colunaRainha > 8) {
        break;
    }
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
if (ataqueFeito) {
    console.log('Parabens para a Rainha!');
} else {
    console.log('Não foi dessa vez');
}
