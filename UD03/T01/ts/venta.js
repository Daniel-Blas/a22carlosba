var abrir = confirm("Desexa abrir unha nova ventá?");
var venta;
if (abrir) {
    venta = window.open("venta.html", "venta", "height=300, width=300, left=500, top=500, menu=0, toolbar=0");
    venta.focus();
}
var cerrar = document.getElementById("cerrar-ventana");
var mover1 = document.getElementById("mover-ventana1");
var mover2 = document.getElementById("mover-ventana2");
var aumentar = document.getElementById("aumentar");
var redimensionar = document.getElementById("redimensionar");
var cerrarVentana = function () {
    if (venta) {
        venta.close();
        venta = null;
    }
    else {
        alert("No hay ninguna ventana abierta.");
    }
};
var moverVenta1 = function () {
    if (venta) {
        venta.focus();
        venta.moveBy(50, 50);
    }
};
var moverVenta2 = function () {
    if (venta) {
        venta.focus();
        venta.moveTo(1000, 120);
    }
};
var aumentarVentana = function () {
    if (venta) {
        venta.focus();
        venta.resizeBy(50, 50);
    }
};
var redimensionarVentana = function () {
    if (venta) {
        venta.focus();
        venta.resizeTo(500, 500);
    }
};
cerrar.onclick = cerrarVentana;
mover1.onclick = moverVenta1;
mover2.onclick = moverVenta2;
aumentar.onclick = aumentarVentana;
redimensionar.onclick = redimensionarVentana;
