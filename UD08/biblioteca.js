// array de libros

let libros = [
    { "nombre": "nombre libro 1", "autor": "autor 1", "resumen": "resumen libro 1" },
    { "nombre": "nombre libro 2", "autor": "autor 2", "resumen": "resumen libro 2" },
    { "nombre": "nombre libro 3", "autor": "autor 3", "resumen": "resumen libro 3" }
];


const App = {
    data() {
        return {
            valor: "hola"
        }
    },

}

Vue.createApp(App).mount('#app');




const listar = {
    data() {
        return {
            libros,
            mostrar: false
        }
    },
}
// montar la app listar
Vue.createApp(listar).mount("#listar");



