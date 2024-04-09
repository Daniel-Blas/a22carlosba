// Creación do array de paises
var paises = ["España", "Portugal", "Andorra", "Francia", "Marrocos", "Reino Unido", "Irlanda", "Suiza", "Bélxica"];
// Exercicio 1
var numeroElementos = function (arr) {
    return arr.length;
};
document.getElementById("sol1").innerHTML = numeroElementos(paises);
// Exercicio 2
var amosarPaises = function (arr) {
    var paisesStr = "";
    for (var i in arr) {
        paisesStr += (arr[i] + ", ");
    }
    return paisesStr.slice(0, paisesStr.length - 2);
};
document.getElementById("sol2").innerHTML = amosarPaises(paises);
// Exercicio 3
var sentidoInverso = function (arr) {
    var temp = new Array(arr);
    return temp.reverse();
    // Outra solución
    // let paisesInv = "";
    // for (let i = arr.length -1; i>=0; i--){
    //     paisesInv += (arr[i] + ", ");
    // }
    // return paisesInv.slice(0, paisesInv.length -2);
};
document.getElementById("sol3").innerHTML = amosarPaises(sentidoInverso(paises));
// Exercicio 4
var engadirComezo = function (arr, pais) {
    console.log(arr.unshift(pais));
    return arr;
};
document.getElementById("sol4").innerHTML = amosarPaises(engadirComezo(paises, "Nueva Zelanda"));
// Exercicio 5
var engadirFinal = function (arr, pais) {
    console.log(arr.push(pais));
    return arr;
};
document.getElementById("sol5").innerHTML = amosarPaises(engadirFinal(paises, "Italia"));
// Exercicio 6
var eliminarComezo = function (arr) {
    return arr.shift();
};
document.getElementById("sol6").innerHTML = eliminarComezo(paises);
// Exercicio 7
var eliminarFinal = function (arr) {
    return arr.pop();
};
document.getElementById("sol7").innerHTML = eliminarFinal(paises);
// Exercicio 8
var amosarElementoPosicion = function (arr) {
    var posicion = parseInt(prompt("Indique unha posici\u00F3n entre 1 y ".concat(arr.length))) - 1;
    console.log(posicion);
    document.getElementById("sol8").innerHTML = arr[posicion];
};
// Exercicio 9
var amosarPosicionElemento = function (arr) {
    var pais = prompt("Indique un Pais: ".concat(amosarPaises(arr)));
    console.log(pais);
    var posicion;
    for (var i in arr) {
        if (arr[i] == pais) {
            posicion = parseInt(i) + 1;
        }
    }
    document.getElementById("sol9").innerHTML = "".concat(pais, " encontrase na posici\u00F3n ").concat(posicion);
};
// Exercicio 10
var duasPosicions = function (arr) {
    var pos1 = parseInt(prompt("Indique a primeira posici\u00F3n: (Entre 1 e ".concat(arr.length, ")"))) - 1;
    var pos2 = parseInt(prompt("Indique a segunda posici\u00F3n: (Entre ".concat(pos1 + 1, " e ").concat(arr.length)));
    document.getElementById("sol10").innerHTML = amosarPaises(arr.slice(pos1, pos2));
};
