let n = 5;
let fatorial = 1

if (n > 0) {
    for (let i = n; i > 0; i--) {
        fatorial = fatorial * i;
    }
    console.log(fatorial);
} else {
    console.log(1);
}
