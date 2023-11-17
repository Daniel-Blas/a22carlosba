document.getElementById("nombre-btn").onclick=nombreUsuario;
document.getElementById("contrasena-btn").onclick=validarContrasena;

function nombreUsuario(){
    let nombre = document.getElementById("nombre").value;
    let resultado = document.getElementById("resultado-nombre");
    resultado.innerHTML =`Tamaño do nome e apelidos: ${nombre.length}<br>`;

    let nombreSeparado = nombre.split(" ");
    let nombreEspacios = "";
    for (let i = 0; i < nombreSeparado.length; i++){
        nombreEspacios += nombreSeparado[i];
    }
    resultado.innerHTML +=`Tamaño do nome e apelidos sen espazos: ${nombreEspacios.length}<br>`;

    resultado.innerHTML +=`Nome e apelidos en minúsculas: ${nombre.toLowerCase()}<br>`;
    resultado.innerHTML +=`Nome e apelidos en maiúsculas: ${nombre.toUpperCase()}<br>`;
    resultado.innerHTML +=`Nome e apelidos separados: ${nombreSeparado}<br>`;

    let usuario;
    usuario = nombreSeparado[0].toLowerCase() + nombreSeparado[1].toUpperCase().charAt(0) +nombreSeparado[2].toUpperCase().charAt(0);
    resultado.innerHTML +=`Proposta de nome de usuario: ${usuario}<br>`;
}

function validarContrasena() {
    let contrasena = document.getElementById("contrasena").value;
    let longitud =(contrasena.length >= 8 && contrasena.length <= 16)?true:false;
    let maiuscula = (contrasena.match(/[A-Z]/))?true:false;
    let minuscula = (contrasena.match(/[a-z]/))?true:false;;
    let numero = (contrasena.match(/\d/))?true:false;
    let especial = (contrasena.match(/\W/))?true:false;
    let valida;
    if (longitud && maiuscula && minuscula && numero && especial){
        valida = "La contraseña es válida.";
    } else {
        valida = "La contraseña no es válida";
    }

    document.getElementById("resultado-contrasena").innerHTML = valida;
}