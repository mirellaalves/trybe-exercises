/* 4- Depois, faça uma pirâmide com n asteriscos de base:
n = 5
  *
 ***
*****  */

let n = 5;
let print = '';
let midN = (n + 1)/2;

let midLeft = midN;
let midRight = midN;

for (let iLinha = 0; iLinha <= midN; iLinha += 1) {
    for (let iColuna = 1; iColuna <= n; iColuna += 1) {
        if (iColuna < midLeft && iColuna > midRight) {
            print = print + '*';
        } else {
            print = print + ' ';
        }
    }
    console.log(print);
    print = '';
    midLeft += 1;
    midRight -= 1;
}
