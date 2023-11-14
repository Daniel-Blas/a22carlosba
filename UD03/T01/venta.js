
let abrir = confirm("Desexa abrir unha nova ventá?");
let venta;
if (abrir) {
    venta = window.open("venta.html", "venta", "height=300, width=300, left=500, top=500, menu=0, toolbar=0");
    venta.focus();

}
let cerrar = document.getElementById("cerrar-ventana");
let mover1 = document.getElementById("mover-ventana1");
let mover2 = document.getElementById("mover-ventana2");
let aumentar = document.getElementById("aumentar");
let redimensionar = document.getElementById("redimensionar");


const cerrarVentana = () => {
    if (venta){
        venta.close();
        venta = null;
    } else {
        alert("No hay ninguna ventana abierta.");
    }
}

const moverVenta1 = () => {
    if (venta) {
        venta.focus();
        venta.moveBy(50, 50);
    }
}
const moverVenta2 = () => {
    if (venta) {
        venta.focus();
        venta.moveTo(1000, 120);
    }
}
const aumentarVentana = () => {
    if (venta) {
        venta.focus();
        venta.resizeBy(50, 50);
    }
}
const redimensionarVentana = () => {
    if (venta) {
        venta.focus();
        venta.resizeTo(500, 500);
    }
}

cerrar.onclick=cerrarVentana;
mover1.onclick=moverVenta1;
mover2.onclick=moverVenta2;
aumentar.onclick=aumentarVentana;
redimensionar.onclick=redimensionarVentana;
