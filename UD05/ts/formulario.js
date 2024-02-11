var nome;
var apelidos;
var idade;
var nif;
var email;
var provincia;
var contrasinal;
var nacemento;
var tel;
var vehiculos = [];
var linguaxe;
var error;
function recollerDatos() {
    nome = document.getElementById('nome').value;
    apelidos = document.getElementById('apelidos').value;
    idade = parseInt(document.getElementById('idade').value);
    nif = document.getElementById('nif').value;
    email = document.getElementById('email').value;
    provincia = document.getElementById('provincia').value;
    contrasinal = document.getElementById('contrasinal').value;
    nacemento = document.getElementById('nacemento').value;
    tel = document.getElementById('telefono').value;
    if (document.getElementById('bici').checked) {
        vehiculos.push(document.getElementById('bici').value);
    }
    if (document.getElementById('coche').checked) {
        vehiculos.push(document.getElementById('coche').value);
    }
    if (document.getElementById('moto').checked) {
        vehiculos.push(document.getElementById('moto').value);
    }
    linguaxe = '';
    var lengElements = document.getElementsByName('leng');
    for (var i = 0; i < lengElements.length; i++) {
        if (lengElements[i].checked) {
            linguaxe = lengElements[i].value;
        }
    }
    var dniRegex = /^[0-9]{8}[A-Z]{1}$/i;
    if (!dniRegex.test(nif)) {
        alert('O NIF non é válido.');
        return false;
    }
    var telRegex = /^[0-9]{9}$/;
    if (!telRegex.test(tel)) {
        alert('O teléfono non é válido.');
        return false;
    }
    if (!nome || !apelidos || !idade || !nif || !email || !provincia || !contrasinal || !nacemento || !tel) {
        alert('Por favor, complete todos los campos.');
        return false;
    }
    return true;
}
function setCookie(cnome, cvalor, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expira = 'expires=' + d.toString();
    document.cookie = cnome + '=' + cvalor + ';' + expira + ';path=/';
}
function getCookie(cnome) {
    var nome = cnome + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        c = c.trim();
        if (c.indexOf(nome) === 0) {
            return c.substring(nome.length, c.length);
        }
    }
    return '';
}
window.onload = function () {
    var verCookie = document.getElementById('verCookie');
    verCookie === null || verCookie === void 0 ? void 0 : verCookie.addEventListener('click', function () {
        var cookie = document.getElementById('cookie');
        if (cookie) {
            cookie.innerHTML = getCookie('usuario');
        }
    }, false);
    var borrarCookie = document.getElementById('borrarCookie');
    borrarCookie === null || borrarCookie === void 0 ? void 0 : borrarCookie.addEventListener('click', function () {
        if (getCookie('usuario').length > 0) {
            setCookie('usuario', getCookie('usuario'), -100);
        }
    }, false);
    var enviar = document.getElementById('enviar');
    enviar === null || enviar === void 0 ? void 0 : enviar.addEventListener('click', function (event) {
        if (!recollerDatos()) {
            event.preventDefault();
        }
        else {
            if (getCookie('usuario').length < 1) {
                var usuario = prompt('introduce o teu nome de usuario:');
                if (usuario) {
                    setCookie('usuario', usuario, 365);
                }
            }
        }
    }, false);
};
