/* 6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals */

let chessPiece = "knighT";

switch (chessPiece.toLowerCase()) {
    case 'king':
        console.log("one square horizontal, vertical, or diagonal");
        break;
    case 'queen':
        console.log("diagonal, horizontal, or vertical");
        break;
    case 'rook':
        console.log("vertical or horizontal");
        break;
    case 'bishop':
        console.log("diagonal");
        break;
    case 'knight':
        console.log("L or 7 laid out at any horizontal or vertical angle");
        break;
    case 'pawns':
        console.log("one square, if that square is unoccupied");
        break;
    default:
        console.log("this is not a chess piece");
}
