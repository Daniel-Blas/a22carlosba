
// Creación da app
const App = Vue.createApp ({
    data() {
        return {
            // variable para mostrar a lista
            mostrar : false,
            // os datos de todos os libros
            libros : [
                {id : 1, nombre : "El grito de la luchuza", autor : "Patricia Highsmith"},
                {id : 2, nombre : "Rescate en el tiempo (1999-1357)", autor : "Michael Crichton"},
                {id : 3, nombre : "Os Biosbardos", autor : "Eduardo Blanco Amor"},
                {id : 4, nombre : "Yo, el jurado", autor : "Mickey Spillane"},
                {id : 5, nombre : "Erehwon", autor : "Samuel Butler"},
                {id : 6, nombre : "El imperio final", autor : "Brandon Sanders"},
                {id : 7, nombre : "El martillo de Dios", autor : "Arthur C. Clarke"},
                {id : 8, nombre : "Punto crítico (Airframe)", autor : "Michael Crichton"},
                {id : 9, nombre : "Historias de Terramar I", autor : "Ursula K. Le Guin"},
                {id : 10, nombre : "Falso movimiento", autor : "Alejandro Gándara"},
                {id : 11, nombre : "Xente ao lonxe", autor : "Eduardo Blanco Amor"},
                {id : 12, nombre : "Cosecha roja", autor : "Dashiell Hammett"},
            ]
        }
    }
})
