/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5
*
**
***
****
*****  */

let n = 5
let print = ''

for (let i = 1; i <= n; i += 1) {
    print = '*' + print;
    console.log(print);
}