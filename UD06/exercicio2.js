
let nome; 
let apelidos;
let idade;
let nif;
let email;
let provincia;
let contrasinal;
let nacemento;
let tel;
let vehiculos = [];
let linguaxe;
let error;



function recollerDatos(){

    
    nome = document.getElementById('nome').value;
    apelidos = document.getElementById('apelidos').value;
    idade = document.getElementById('idade').value;

    nif = document.getElementById('nif').value;

    email = document.getElementById('email').value;


    let provincias = document.getElementById('provincia');
    provincia = provincias.options[provincias.selectedIndex].value;

    contrasinal = document.getElementById('contrasinal').value;
    nacemento = document.getElementById('nacemento').value;

    tel = document.getElementById('telefono').value;

    if(document.getElementById('bici').checked){
        vehiculos.push(document.getElementById('bici').value);
    }
    if(document.getElementById('coche').checked){
        vehiculos.push(document.getElementById('coche').value);
    }
    if(document.getElementById('moto').checked){
        vehiculos.push(document.getElementById('moto').value);
    }
    linguaxe;
    for (let i = 0; i < document.formulario.leng.length; i++){
        if (document.formulario.leng[i].checked){
            linguaxe = document.formulario.leng[i].value;
        }
    }
    const dniRegex = /^[0-9]{8}[A-Z]{1}$/i;
    if (!dniRegex.test(nif)) {
        // Eliminamos a validación para que sexa mais cómodo
        // alert('O NIF no é válido.');
        return;
    }
    // Validar teléfono
    const telRegex = /^[0-9]{9}$/;
    if (!telRegex.test(tel)) {
        // Eliminamos a validación para que sexa mais cómodo
        // alert('O teléfono non é válido.');
        return;
    }

     // Validar campos
     if (!nome || !apelidos || !idade || !nif || !email || !provincia || !contrasinal || !nacemento || !tel) {
        // Eliminamos a validación para que sexa mais cómodo
        // alert('Por favor, complete todos los campos.');
        return false;
    } else {
        return true;
    }
    // Validar NIF


    // Guardar cookie con nombre de usuario
    // const nombreUsuario = prompt('Introduce tu nombre de usuario:');
    // document.cookie = `nombreUsuario=${nombreUsuario}`;

    // alert(`${nome}  ${apelidos} ${idade} ${nif} ${email} ${provincia} ${contrasinal} ${nacemento} ${telefono} ${vehiculos} ${linguaxe}`);
}


function setCookie(cnome, cvalor, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expira = "expires=" + d.toGMTString();
    document.cookie = cnome + "=" + cvalor + ";" + expira + ";path=/";
    }

function getCookie(cnome) {
    let nome = cnome + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    c = c.trim();
    if (c.indexOf(nome) == 0) {
    return c.substring(nome.length, c.length);
    }
    }
    return "";
    }


window.onload = function(){

    let verCookie = document.getElementById("verCookie");
    verCookie.addEventListener("click", function() {
        document.getElementById("cookie").innerHTML = getCookie("usuario");
    }, false);
    
    let borrarCookie = document.getElementById("borrarCookie");
    borrarCookie.addEventListener("click", function() {
        if (getCookie("usuario").length > 0){
            setCookie("usuario",getCookie("usuario"), -100);
        }
    }, false);
    
    let enviar = document.getElementById("enviar");
    enviar.addEventListener("click",function(event) {
        if (!recollerDatos()){
            event.preventDefault();
        }else {
            
            // comprobar se xa existe cookie
            if (getCookie("usuario").length < 1){
                let usuario = prompt("introduce o teu nome de usuario:");
                setCookie("usuario", usuario, 365);
            }
            
        }
        }, false);
    }
    // const cambiar = (evt) => {
    //     if (evt.keyCode == 13)  // Código de la tecla Enter
    //           if (this.nextSibling.nextSibling.type == "text")
    //               this.nextSibling.nextSibling.focus();
    // }
    let inputs = document.getElementsByTagName("input");
    for (let i = 0;  i < inputs.length -1; i++) {
        inputs[i].addEventListener("keypress", cambiar = (evt) => {
            if (evt.keyCode == 13)  // Código de la tecla Enter
                  inputs[i+1].focus();
        }, false);
    }




