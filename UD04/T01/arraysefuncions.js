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
    return amosarPaises(arr.reverse());
}

document.getElementById("sol3").innerHTML = sentidoInverso(paises);