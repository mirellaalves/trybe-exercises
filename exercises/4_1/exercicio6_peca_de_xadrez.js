let cp = "Bishop";
let cp_lc = cp.toLowerCase();

if (cp_lc = "king") {
    console.log("one square horizontal, vertical, or diagonal");
}
else if (cp_lc = "queen") {
    console.log("diagonal, horizontal, or vertical");
}
else if (cp_lc = "rook") {
    console.log("vertical or horizontal");
}
else if (cp_lc = "bishop") {
    console.log("diagonal");
}
else if (cp_lc = "knight") {
    console.log("L or 7 laid out at any horizontal or vertical angle");
}
else if (cp_lc = "pawns") {
    console.log("one square, if that square is unoccupied");
}
else {
    console.log("this is not a chess piece");
}