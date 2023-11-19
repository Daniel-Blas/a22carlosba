

document.getElementById("fin-curso-btn")!.onclick=finCurso;
document.getElementById("cumple-btn")!.onclick=finSemana;
document.getElementById("data-formato-btn")!.onclick=dataFormato;
document.getElementById("hora-formato-btn")!.onclick=horaFormato;

function finCurso(){
    let fecha : Date;
    fecha = new Date();
    let fechaFin : Date;
    fechaFin = new Date(2024, 6, 25);
    let dias : number;
    dias = Math.round((fechaFin.getTime() - fecha.getTime()) / (1000 * 60 * 60 *24));
    document.getElementById("fin-curso")!.innerHTML= `Faltan ${dias} día(s) ata final de curso`;
}

function finSemana(){
    let anhos : number[] = [];
    let fechaCumple : string;
    fechaCumple = (document.getElementById("fecha-cumple") as HTMLInputElement).value;
    console.log(fechaCumple);
    let diaS : string = fechaCumple.substring(8,10);
    let dia : number = +diaS;
    let mesS : string = fechaCumple.substring(5,7);
    let mes : number = +mesS;
    for (let anho = new Date().getFullYear();anho <= 2100; anho++){
        let fecha = new Date();
        fecha.setFullYear(anho)
        fecha.setMonth(mes -1);
        fecha.setDate(dia);

        // Os Domingo é 0 e o Sabado é 6
        if (fecha.getDay() == 0 || fecha.getDay() == 6){
            anhos.push(anho);
        }
    }
    document.getElementById("cumple")!.innerHTML = `Estos son os anos no que o teu cumpleanos cae en fin de semana:</br> ${anhos}`;
}

function dataFormato(){

let fecha : Date = new Date();
let fechaForm : string = "";
    switch((document.getElementById("formato") as HTMLInputElement).value){
        case "0":
            fechaForm = fecha.toLocaleString('es-ES').substring(0,10);
            break;
            // Por algún motivo, en TypeScript non funcionan os argumentos para modificar o formato da fecha
        case "1":
            fechaForm = fecha.toLocaleDateString('es-ES', {weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'});
            break;
        case "2":
            fechaForm = fecha.toLocaleDateString('en-EN', {weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'});
            break;
        default:
            fechaForm = "erro";
            break;
    }
    document.getElementById("data-formato")!.innerHTML = fechaForm;
}

function horaFormato(){
    let fecha : Date = new Date();
    let hora : string;
    let h : number = fecha.getHours();
    let m : number = fecha.getMinutes();
    let s : number = fecha.getSeconds();
    switch((document.getElementById("hora-formato-opt") as HTMLInputElement).value){
        case "0":
            hora = h +":" +m +":" +s;
            break;
        case "1":
            let mediodia : string = " AM";
            if (h > 12){
                h = h -12;
                mediodia = " PM";
            }
            hora = h +":" +m +mediodia;
            break;
        default:
            hora = "erro";
            break;
    }
    document.getElementById("hora-formato")!.innerHTML = hora;
}