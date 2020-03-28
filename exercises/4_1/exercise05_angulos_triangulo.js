/* 5- Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro. */

let a = 60
let b = 90
let c = 30

if (a + b + c === 180) {
    return true;
} else {
    console.log("Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.");
    return false;
}
