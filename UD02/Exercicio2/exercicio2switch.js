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
        erro = false;
        switch (true) {
            case idade < 0:
                console.log("Non pode introducir números negativos.");
                erro = true;
                break;
            case idade <= 12:
                console.log("0-12: neno");
                break;
            case idade <= 18:
                console.log("13-18: adolescente");
                break;
            case idade <= 30:
                console.log("18-30: xoven");
                break;
            case idade <= 65:
                console.log("31-65: adulto");
                break;
            case idade <= 100:
                console.log("66-100: xubilado");
                break;
            default: console.log("Noraboa, ten máis de 100 anos.");
        }
    }
} while (erro);
