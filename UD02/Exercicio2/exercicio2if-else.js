// Idade
var erro = false;
do {
    var idadeS = prompt("Introduce unha idade:");
    if (isNaN(idadeS)) {
        console.log("Por favor, introduza un número.");
        erro = true;
    }
    else {
        // con if/else
        var idade = parseInt(idadeS);
        if (idade < 0) {
            console.log("Non pode introducir números negativos.");
            erro = true;
        }
        else if (idade <= 12) {
            console.log("0-12: neno");
        }
        else if (idade <= 18) {
            console.log("13-18: adolescente");
        }
        else if (idade <= 30) {
            console.log("18-30: xoven");
        }
        else if (idade <= 65) {
            console.log("31-65: adulto");
        }
        else if (idade <= 100) {
            console.log("66-100: xubilado");
        }
        else {
            console.log("Noraboa, ten máis de 100 anos.");
        }
        erro = false;
    }
} while (erro);
