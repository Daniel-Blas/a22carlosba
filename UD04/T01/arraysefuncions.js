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

document.getElementById("sol4").innerHTML = amosarPaises(engadirComezo(paises, "Nueva Zelanda"));


// Exercicio 5
const engadirFinal = (arr, pais) =>{
    console.log(arr.push(pais));
    return arr;
}

document.getElementById("sol5").innerHTML = amosarPaises(engadirFinal(paises, "Italia"));


// Exercicio 6
const eliminarComezo = (arr) =>{
    return arr.shift();
}

document.getElementById("sol6").innerHTML = eliminarComezo(paises);

// Exercicio 7
const eliminarFinal = (arr) =>{
    return arr.pop();
}

document.getElementById("sol7").innerHTML = eliminarFinal(paises);

// Exercicio 8
const amosarElementoPosicion = (arr) =>{
    posicion = parseInt(prompt(`Indique unha posición entre 1 y ${arr.length}`)) -1;
    console.log(posicion);
    document.getElementById("sol8").innerHTML = arr [posicion];
}

// Exercicio 9
const amosarPosicionElemento = (arr) =>{
    pais = prompt(`Indique un Pais: ${amosarPaises(arr)}`);
    console.log(pais);
    posicion = null;
    for (let i in arr){
        if (arr[i] == pais){
            posicion =parseInt(i) +1;
        }
    }
    document.getElementById("sol9").innerHTML = `${pais} se encuentra en la posición ${posicion}`;
}