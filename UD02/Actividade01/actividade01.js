// Táboa de multiplicar do 9
console.log("Táboa de multiplicar do 9");
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log("9 * " + i_1 + " = " + (9 * i_1));
}
// Sucesión de Fibonacci
console.log("Sucesión de Fibonacci");
var i = 0;
var n1 = 0;
var n2 = 1;
console.log(n1);
console.log(n2);
while (i < 10) {
    var temp = n1 + n2;
    n1 = n2;
    n2 = temp;
    console.log(temp);
    i++;
}
// Número primo
console.log("Número primo");
var falso = false;
do {
    var numero = prompt("Introduzca un número:");
    if (isNaN(numero)) {
        console.log("No es un número");
        falso = true;
    }
    else {
        console.log("Dentro del parse Int");
        var n = parseInt(numero);
        if (n % 2 == 0) {
            console.log("El número " + n + " es par");
        }
        else {
            console.log("El número " + n + " es impar");
        }
        falso = false;
    }
} while (falso);
