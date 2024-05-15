const App = {
    data() {
        return {

        }
    }
}

// coger la lista de libros del archivo json
$.ajax({
    url: 'libros.json',
    type: 'GET',
    success: function (libros) {
        // Crear la app listar
        const listar = {
            data() {
                return {
                    libros,
                    mostrar : false
                }
            },
           
        }
        // montar la app listar
        Vue.createApp(listar).mount("#listar");

    },
    error: function (jqXHR, status) {
        console.error('Error:',status, jqXHR);
    }
});

