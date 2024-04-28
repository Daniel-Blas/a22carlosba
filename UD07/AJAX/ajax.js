$(document).ready(function () {

    // Función para obter e mostrar usuarios
    function amosarUsuarios() {

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            type: 'GET',
            success: function (users) {

                let userList = $('#user-list');
                $.each(users, function (index, user) {
                    var listItem = $('<li>').text(user.name);
                    listItem.on("click",  () =>{

                        amosarDatos(user, listItem);
                    });
                    userList.append(listItem);
                });
            },
            error: function (jqXHR, status) {
                console.error('Error:',status, jqXHR);
            }
        });
    }

    // Para amosar os datos dos usuarios
    function amosarDatos(u, e){
        // amosar os Datos do usuario en forma de lista
        $(e).toggleClass("amosar");
        if ($(e).prop("class") == "amosar"){
            // crear unha lista cos datos do usuario e engadila
            crearLista(u, e);
        } else {
            $(e).children().remove();

        }
    }

    function crearLista(u, e){
      
        let lista = $("<ul>");
        let datos = [];

        let id = $("<li>").text("Id: " +u.id);
        let name = $("<li>").text("Nombre: " +u.name);
        let username = $("<li>").text("Usuario: " +u.username);
        let email = $("<li>").text("Email: " +u.email);
        let addr = u.address;
        let address = $("<li>").text("Dirección: " +addr.street + ", " +addr.suite + ", " +addr.city + ", " +addr.zipcode);
        let phone = $("<li>").text("Teléfono" +u.phone);
        let website = $("<li>").text("Páxina web: " +u.website);
        let company = $("<li>").text("Compañía: " +u.company.name);
        
        // for loop para agregar todos os datos o array:
        datos.push(id, name, username, email, address, phone, website, company);

        // datos.push(id);
        // datos.push(nome);
        lista.append(datos);
        e.append(lista);
    }



    // función para amosar albums
    function amosarAlbums(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/albums',
            type: 'GET',
            success: function (albums) {
                let select = $("#albums");
                $.each(albums, (index, album) =>{
                    let opt = $("<option>").text(album.title);
                    opt.prop("value", album.id); 
                    select.append(opt);
                })
                
                select.change(() =>{
                    amosarFotos(select.prop("value"))
                })

            },
            error: function (jqXHR, status) {
                console.error('Error:',status, jqXHR);
            }
        });
    }




    function amosarFotos(idAlbum){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos?albumId=' +idAlbum,
            type: 'GET',
            success: function (fotos) {
               let divFotos = $("#fotos");
               divFotos.empty();
               for (let i = 0; i < 3 ; i++){
                let img = $("<img>").prop("src", fotos[i].url);
                divFotos.append(img);
               }
                
            },
            error: function (jqXHR, status) {
                console.error('Error:',status, jqXHR);
            }
        });
    }

    amosarUsuarios();
    amosarAlbums();

});