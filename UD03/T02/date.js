

document.getElementById("fin-curso-btn").onclick=finCurso;

function finCurso(){
    let fecha = new Date();
    let fechaFin = new Date(2024, 6, 25);
    let dias = Math.round((fechaFin.getTime() - fecha.getTime()) / (1000 * 60 * 60 *24));
    document.getElementById("fin-curso").innerHTML=dias;
}