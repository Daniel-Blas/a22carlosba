document.getElementById("nombre-btn")!.onclick=nombreUsuario;
document.getElementById("contrasena-btn")!.onclick=validarContrasena;

function nombreUsuario(){
    let nombre : string = (document.getElementById("nombre") as HTMLInputElement).value;
    let resultado : HTMLElement = document.getElementById("resultado-nombre")!;
    resultado!.innerHTML =`Tamaño do nome e apelidos: ${nombre.length}<br>`;

    let nombreSeparado : string[] = nombre.split(" ");
    let nombreEspacios : string = "";
    for (let i : number = 0; i < nombreSeparado.length; i++){
        nombreEspacios += nombreSeparado[i];
    }
    resultado.innerHTML +=`Tamaño do nome e apelidos sen espazos: ${nombreEspacios.length}<br>`;

    resultado.innerHTML +=`Nome e apelidos en minúsculas: ${nombre.toLowerCase()}<br>`;
    resultado.innerHTML +=`Nome e apelidos en maiúsculas: ${nombre.toUpperCase()}<br>`;
    resultado.innerHTML +=`Nome e apelidos separados: ${nombreSeparado}<br>`;

    let usuario : string;
    usuario = nombreSeparado[0].toLowerCase() + nombreSeparado[1].toUpperCase().charAt(0) +nombreSeparado[2].toUpperCase().charAt(0);
    resultado.innerHTML +=`Proposta de nome de usuario: ${usuario}<br>`;
}

function validarContrasena() {
    let contrasena : string = (document.getElementById("contrasena") as HTMLInputElement).value;
    let longitud : boolean =(contrasena.length >= 8 && contrasena.length <= 16)?true:false;
    let maiuscula : boolean = (contrasena.match(/[A-Z]/))?true:false;
    let minuscula : boolean = (contrasena.match(/[a-z]/))?true:false;;
    let numero : boolean = (contrasena.match(/\d/))?true:false;
    let especial : boolean = (contrasena.match(/\W/))?true:false;
    let valida : string;
    if (longitud && maiuscula && minuscula && numero && especial){
        valida = "La contraseña es válida.";
    } else {
        valida = "La contraseña no es válida";
    }

    document.getElementById("resultado-contrasena")!.innerHTML = valida;
}