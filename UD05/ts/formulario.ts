let nome: string; 
let apelidos: string;
let idade: number;
let nif: string;
let email: string;
let provincia: string;
let contrasinal: string;
let nacemento: string;
let tel: string;
let vehiculos: string[] = [];
let linguaxe: string;
let error: HTMLElement;

function recollerDatos(): boolean {
    nome = (document.getElementById('nome') as HTMLInputElement).value;
    apelidos = (document.getElementById('apelidos') as HTMLInputElement).value;
    idade = parseInt((document.getElementById('idade') as HTMLInputElement).value);
    nif = (document.getElementById('nif') as HTMLInputElement).value;
    email = (document.getElementById('email') as HTMLInputElement).value;
    provincia = (document.getElementById('provincia') as HTMLSelectElement).value;
    contrasinal = (document.getElementById('contrasinal') as HTMLInputElement).value;
    nacemento = (document.getElementById('nacemento') as HTMLInputElement).value;
    tel = (document.getElementById('telefono') as HTMLInputElement).value;

    if ((document.getElementById('bici') as HTMLInputElement).checked) {
        vehiculos.push((document.getElementById('bici') as HTMLInputElement).value);
    }
    if ((document.getElementById('coche') as HTMLInputElement).checked) {
        vehiculos.push((document.getElementById('coche') as HTMLInputElement).value);
    }
    if ((document.getElementById('moto') as HTMLInputElement).checked) {
        vehiculos.push((document.getElementById('moto') as HTMLInputElement).value);
    }

    linguaxe = '';
    const lengElements = document.getElementsByName('leng');
    for (let i = 0; i < lengElements.length; i++) {
        if ((lengElements[i] as HTMLInputElement).checked) {
            linguaxe = (lengElements[i] as HTMLInputElement).value;
        }
    }

    const dniRegex = /^[0-9]{8}[A-Z]{1}$/i;
    if (!dniRegex.test(nif)) {
        alert('O NIF non é válido.');
        return false;
    }

    const telRegex = /^[0-9]{9}$/;
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

function setCookie(cnome: string, cvalor: string, exdays: number): void {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expira = 'expires=' + d.toString();
    document.cookie = cnome + '=' + cvalor + ';' + expira + ';path=/';
}

function getCookie(cnome: string): string {
    const nome = cnome + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        c = c.trim();
        if (c.indexOf(nome) === 0) {
            return c.substring(nome.length, c.length);
        }
    }
    return '';
}

window.onload = function(): void {
    const verCookie = document.getElementById('verCookie');
    verCookie?.addEventListener('click', function() {

        const cookie = document.getElementById('cookie');
        if (cookie){
            cookie.innerHTML = getCookie('usuario');
        }
    }, false);
    
    const borrarCookie = document.getElementById('borrarCookie');
    borrarCookie?.addEventListener('click', function() {
        if (getCookie('usuario').length > 0) {
            setCookie('usuario', getCookie('usuario'), -100);
        }
    }, false);
    
    const enviar = document.getElementById('enviar');
    enviar?.addEventListener('click', function(event) {
        if (!recollerDatos()) {
            event.preventDefault();
        } else {
            if (getCookie('usuario').length < 1) {
                const usuario = prompt('introduce o teu nome de usuario:');
                if (usuario){
                    setCookie('usuario', usuario, 365);
                }
            }
        }
    }, false);
};