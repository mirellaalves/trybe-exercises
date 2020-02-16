let cp;
let cp_lc = cp.toLowerCase();

switch (cp_lc) {
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

    default
    console.log("this is not a chess piece");
}