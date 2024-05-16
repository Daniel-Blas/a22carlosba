
App.component('lista-libros', {
    props : ['libro'],
    template : `
        <li v-bind:id=libro.id>{{libro.nombre}}, {{libro.autor}}</li>
    `,
})