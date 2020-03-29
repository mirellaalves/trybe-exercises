/* 3- Agora inverta o lado do triângulo. Por exemplo:
n = 5
    *
   **
  ***
 ****
*****  */

let n = 5;
let print = '';
let position = n;

for (let iLinha = 0; iLinha < n; iLinha += 1) {
    for (let iColuna = 1; iColuna <=n; iColuna += 1) {
        if (iColuna < position) {
            print = print + ' ';
        } else {
            print = print + '*';
        }
    }
    console.log(print);
    print = '';
    position -= 1;
}
