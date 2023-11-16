

document.getElementById("fin-curso-btn").onclick=finCurso;
document.getElementById("cumple-btn").onclick=finSemana;
document.getElementById("data-formato-btn").onclick=dataFormato;
document.getElementById("hora-formato-btn").onclick=horaFormato;

function finCurso(){
    let fecha = new Date();
    let fechaFin = new Date(2024, 6, 25);
    let dias = Math.round((fechaFin.getTime() - fecha.getTime()) / (1000 * 60 * 60 *24));
    document.getElementById("fin-curso").innerHTML= "Faltan " +dias +" día(s) ata final de curso";
}

function finSemana(){
    let anhos =[];
    let fechaCumple = document.getElementById("fecha-cumple").value;
    let dia = fechaCumple.substring(8,10);
    let mes = fechaCumple.substring(5,7);
    for (let anho = new Date().getFullYear();anho <= 2100; anho++){
        let fecha = new Date();
        fecha.setFullYear(anho)
        fecha.setMonth(mes -1);
        fecha.setDate(dia);
        if (fecha.getDay() == 5 || fecha.getDay() == 6){
            anhos.push(anho);
        }
    }
    document.getElementById("cumple").innerHTML = "Estos son os anos no que o teu cumpleanos cae en fin de semana:</br>" +anhos;
}

function dataFormato(){
    let fecha = new Date();
    let fechaForm;
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    switch(document.getElementById("formato").value){
        case "0":
            fechaForm = fecha.toLocaleString('es-ES').substring(0,10);
            break;
        case "1":
            fechaForm = fecha.toLocaleDateString('es-ES', options);
            break;
        case "2":
            fechaForm = fecha.toLocaleDateString('en-EN', options);
            break;
        default:
            fechaForm = "erro";
            break;
    }
    document.getElementById("data-formato").innerHTML = fechaForm;
}

function horaFormato(){
    let fecha = new Date();
    let hora;
    let h = fecha.getHours();
    let m = fecha.getMinutes();
    let s = fecha.getSeconds();
    switch(document.getElementById("hora-formato-opt").value){
        case "0":
            hora = h +":" +m +":" +s;
            break;
        case "1":
            let mediodia = " AM";
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
    document.getElementById("hora-formato").innerHTML = hora;
}