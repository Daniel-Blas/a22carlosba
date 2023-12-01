// Creación do array de paises
let paises = ["España", "Portugal", "Andorra", "Francia", "Marruecos", "Reino Unido", "Irlanda", "Suiza", "Bélgica"];


// Exercicio 1
const numeroElementos = (arr) =>{
    return arr.length;
}

document.getElementById("sol1").innerHTML = numeroElementos(paises);

// Exercicio 2

const amosarPaises = (arr) =>{
    let paisesStr = "";
    for (i in arr){
        paisesStr += (arr[i] + ", ");
    }
    return paisesStr.slice(0, paisesStr.length -2);
}

document.getElementById("sol2").innerHTML = amosarPaises(paises);

// Exercicio 3
const sentidoInverso = (arr) =>{
    let paisesInv = "";
    for (let i = arr.length -1; i>=0; i--){
        paisesInv += (arr[i] + ", ");
    }
    return paisesInv.slice(0, paisesInv.length -2);
}

document.getElementById("sol3").innerHTML = sentidoInverso(paises);

// Exercicio 4
const engadirComezo = (arr, pais) =>{
    console.log(arr.unshift(pais));
    return arr;
}
paises = engadirComezo(paises, "Nueva Zelanda");
console.log(paises);

document.getElementById("sol4").innerHTML = amosarPaises(paises);


// Exercicio 5
const engadirFinal = (arr, pais) =>{
    console.log(arr.push(pais));
    return arr;
}
paises = engadirFinal(paises, "Italia");
console.log(paises);

document.getElementById("sol5").innerHTML = amosarPaises(paises);
