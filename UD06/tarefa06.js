let parrafos = document.getElementsByTagName("p");

// Número de párrafos da páxina
let numPar = parrafos.length;
console.log(numPar);

// Así conseguimos el primer elemento del párrafo, pero no el párrafo entero
let parrafo2 = parrafos[1];
console.log(parrafo2.firstChild.nodeValue)

// De esta forma conseguimos el párrafo entero
let fillosP2 = parrafo2.childNodes;
console.log(fillosP2);
for(let i = 0; i < fillosP2.length; i++){
    console.log(fillosP2[i]);
}

// Número de ligazóns da páxina
let ligazons = document.getElementsByTagName("a");
let numLig = ligazons.length;
console.log(numLig);

// Enderezo da primeira ligazón
let enderezo1 = ligazons[0].attributes["href"].nodeValue;
console.log(enderezo1);

// Enderezo da penúltima ligazón
let enderezoPenUl = ligazons[ligazons.length -2].attributes["href"].nodeValue;
console.log(enderezoPenUl);

// Número de ligazóns do primeiro párrafo
let parrafo1 = parrafos[0];
let numLigP1 = parrafo1.getElementsByTagName("a").length;
console.log(numLigP1);
