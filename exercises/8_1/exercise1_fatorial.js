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
