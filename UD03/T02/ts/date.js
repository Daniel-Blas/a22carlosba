document.getElementById("fin-curso-btn").onclick = finCurso;
document.getElementById("cumple-btn").onclick = finSemana;
document.getElementById("data-formato-btn").onclick = dataFormato;
document.getElementById("hora-formato-btn").onclick = horaFormato;
function finCurso() {
    var fecha;
    fecha = new Date();
    var fechaFin;
    fechaFin = new Date(2024, 6, 25);
    var dias;
    dias = Math.round((fechaFin.getTime() - fecha.getTime()) / (1000 * 60 * 60 * 24));
    document.getElementById("fin-curso").innerHTML = "Faltan ".concat(dias, " d\u00EDa(s) ata final de curso");
}
function finSemana() {
    var anhos = [];
    var fechaCumple;
    fechaCumple = document.getElementById("fecha-cumple").value;
    console.log(fechaCumple);
    var diaS = fechaCumple.substring(8, 10);
    var dia = +diaS;
    var mesS = fechaCumple.substring(5, 7);
    var mes = +mesS;
    for (var anho = new Date().getFullYear(); anho <= 2100; anho++) {
        var fecha = new Date();
        fecha.setFullYear(anho);
        fecha.setMonth(mes - 1);
        fecha.setDate(dia);
        // Os Domingo é 0 e o Sabado é 6
        if (fecha.getDay() == 0 || fecha.getDay() == 6) {
            anhos.push(anho);
        }
    }
    document.getElementById("cumple").innerHTML = "Estos son os anos no que o teu cumpleanos cae en fin de semana:</br> ".concat(anhos);
}
function dataFormato() {
    var fecha = new Date();
    var fechaForm = "";
    var options = "weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'";
    switch (document.getElementById("formato").value) {
        case "0":
            fechaForm = fecha.toLocaleString('es-ES').substring(0, 10);
            break;
        case "1":
            fechaForm = fecha.toLocaleDateString('es-ES');
            break;
        case "2":
            fechaForm = fecha.toLocaleDateString('en-EN');
            break;
        default:
            fechaForm = "erro";
            break;
    }
    document.getElementById("data-formato").innerHTML = fechaForm;
}
function horaFormato() {
    var fecha = new Date();
    var hora;
    var h = fecha.getHours();
    var m = fecha.getMinutes();
    var s = fecha.getSeconds();
    switch (document.getElementById("hora-formato-opt").value) {
        case "0":
            hora = h + ":" + m + ":" + s;
            break;
        case "1":
            var mediodia = " AM";
            if (h > 12) {
                h = h - 12;
                mediodia = " PM";
            }
            hora = h + ":" + m + mediodia;
            break;
        default:
            hora = "erro";
            break;
    }
    document.getElementById("hora-formato").innerHTML = hora;
}
