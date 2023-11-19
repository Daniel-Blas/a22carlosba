document.getElementById("nombre-btn").onclick = nombreUsuario;
document.getElementById("contrasena-btn").onclick = validarContrasena;
function nombreUsuario() {
    var nombre = document.getElementById("nombre").value;
    var resultado = document.getElementById("resultado-nombre");
    resultado.innerHTML = "Tama\u00F1o do nome e apelidos: ".concat(nombre.length, "<br>");
    var nombreSeparado = nombre.split(" ");
    var nombreEspacios = "";
    for (var i = 0; i < nombreSeparado.length; i++) {
        nombreEspacios += nombreSeparado[i];
    }
    resultado.innerHTML += "Tama\u00F1o do nome e apelidos sen espazos: ".concat(nombreEspacios.length, "<br>");
    resultado.innerHTML += "Nome e apelidos en min\u00FAsculas: ".concat(nombre.toLowerCase(), "<br>");
    resultado.innerHTML += "Nome e apelidos en mai\u00FAsculas: ".concat(nombre.toUpperCase(), "<br>");
    resultado.innerHTML += "Nome e apelidos separados: ".concat(nombreSeparado, "<br>");
    var usuario;
    usuario = nombreSeparado[0].toLowerCase() + nombreSeparado[1].toUpperCase().charAt(0) + nombreSeparado[2].toUpperCase().charAt(0);
    resultado.innerHTML += "Proposta de nome de usuario: ".concat(usuario, "<br>");
}
function validarContrasena() {
    var contrasena = document.getElementById("contrasena").value;
    var longitud = (contrasena.length >= 8 && contrasena.length <= 16) ? true : false;
    var maiuscula = (contrasena.match(/[A-Z]/)) ? true : false;
    var minuscula = (contrasena.match(/[a-z]/)) ? true : false;
    ;
    var numero = (contrasena.match(/\d/)) ? true : false;
    var especial = (contrasena.match(/\W/)) ? true : false;
    var valida;
    if (longitud && maiuscula && minuscula && numero && especial) {
        valida = "La contraseña es válida.";
    }
    else {
        valida = "La contraseña no es válida";
    }
    document.getElementById("resultado-contrasena").innerHTML = valida;
}
