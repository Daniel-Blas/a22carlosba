function recollerDatos(){
    let nome = document.getElementById('nome').value;
    let apelidos = document.getElementById('apelidos').value;
    let idade = document.getElementById('idade').value;
    let nif = document.getElementById('nif').value;
    let email = document.getElementById('email').value;


    let provincias = document.getElementById('provincia');
    let provincia = provincias.options[provincias.selectedIndex].value;

    let contrasinal = document.getElementById('contrasinal').value;
    let nacemento = document.getElementById('nacemento').value;
    let telefono = document.getElementById('telefono').value;

    let vehiculos = [];
    if(document.getElementById('bici').checked){
        vehiculos.push(document.getElementById('bici').value);
    }
    if(document.getElementById('coche').checked){
        vehiculos.push(document.getElementById('coche').value);
    }
    if(document.getElementById('moto').checked){
        vehiculos.push(document.getElementById('moto').value);
    }
    let linguaxe;
    for (let i = 0; i < document.formulario.leng.length; i++){
        if (document.formulario.leng[i].checked){
            linguaxe = document.formulario.leng[i].value;
        }
    }


    // alert(`${nome}  ${apelidos} ${idade} ${nif} ${email} ${provincia} ${contrasinal} ${nacemento} ${telefono} ${vehiculos} ${linguaxe}`);
}

window.onload = function(){
    let enviar = document.getElementById("enviar");
    enviar.addEventListener("click", recollerDatos, false);
}