// Táboa de multiplicar do 9

// console.log("Táboa de multiplicar do 9");
// for (let i = 0; i< 10; i++){
//     console.log("9 * " +i +" = " +(9 * i));
// }

// Sucesión de Fibonacci

console.log("Sucesión de Fibonacci");
let i = 0;
let n1 = 0;
let n2 = 1;
console.log(n1);
console.log(n2);
while (i < 10) {
    let temp = n1 +n2;
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
    if (isNaN(numero)){
        console.log("No es un número");
        falso = true;
    } else {
        console.log("Dentro del parse Int")
        let n = parseInt(numero);
        if (n % 2 == 0){
            console.log("El número " +n +" es par");
        } else {
            console.log("El número " +n +" es impar");
        }
        falso = false;
    }
} while(falso);