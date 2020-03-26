const n = -1;
let fatorial = 1

if (n > 0) {
    for (let i = n; i > 0; i -= 1) {
        fatorial = fatorial * i;
    }
    console.log(fatorial);
} else if (n == 0) {
    console.log(1);
} else {
    return false;
}

/* em 1 linha:
const fatorial = (n) => (n === 0) ? 1 : n * fatorial(n - 1);

É os mesmo que:

if (n === 0) {
    return 1
} else {
    return n * fatorial(n - 1)
} */