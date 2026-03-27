let string1;
let string2;
let resultado;

function concatenarEInvertir(string1, string2) {
    let string3 = string2 + string1;
    let inversion = string3.split("").reverse().join("");
    return inversion;
}

console.log(concatenarEInvertir("Establecimiento", "Educativo"));
