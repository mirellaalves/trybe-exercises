/* 1 Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha. */

fatorial = () => {
    const n = 4
    for (let i = n; i > 0; i += 1) {
        
    }
}


/*
const n = 4;
let fatorial = 1

if (n > 0) {
    for (let i = n; i > 0; i -= 1) {
        fatorial = fatorial * i;
    }
    console.log(fatorial);
} else if (n === 0) {
    console.log(1);
} else {
    return false;
} */

// em 1 linha:
fatorial = (n) => (n === 0) ? 1 : n * fatorial(n - 1);

console.log(fatorial(4));

// É os mesmo que:

/* if (n === 0) {
    return 1
} else {
    return n * fatorial(n - 1);
}*/
