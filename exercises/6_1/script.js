let estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

for (let i = 0; i < 27; i++) {
    let cadaEstado = document.createElement("option");
    document.getElementById("estado").appendChild(cadaEstado);
    cadaEstado.value = estados[i];
    cadaEstado.innerHTML = estados[i];
}