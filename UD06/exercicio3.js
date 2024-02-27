let introducirTexto = document.getElementById("introducir");
let borrarPr = document.getElementById("borrarPr");
let borrarUlt = document.getElementById("borrarUlt");

const novoItem = (evt) => {
    let texto = prompt("Introduce texto:");
    let novoLi = document.createElement("li");
    let novoTexto = document.createTextNode(texto);
    novoLi.appendChild(novoTexto);
    document.getElementById("lista").appendChild(novoLi);
}

const borrarP = (evt) => {
    let listItems = document.getElementById("lista").getElementsByTagName("li");
    document.getElementById("lista").removeChild(listItems[0]);
}

const borrarU = (evt) => {
    let listItems = document.getElementById("lista").getElementsByTagName("li");
    document.getElementById("lista").removeChild(listItems[listItems.length -1]);
}

introducirTexto.addEventListener("click", novoItem, false);
borrarPr.addEventListener("click", borrarP, false);
borrarUlt.addEventListener("click", borrarU, false);