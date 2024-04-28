$().ready(() => {
  // Ex 1: As filas pares deberán ter color diferente ás impares  
  $("#mitabla tr:nth-child(even)").addClass("colorido");
  // Ex 2: Calcular a media e a ponderación
  $("#calcular").click(() =>{
    // Comprobar que non existan as columnas de nota media e ponderación
    let existe = false;
    $("tr:first-child").find("th").each((index, element) =>{
      if ($(element).text() == "Nota Media"){
        existe = true;
      }
    })
    
    if (!existe){
      
      // engadir columna nota media e ponderación
      $("tr:first-child").append("<th>Nota Media</th>");
      $("tr:first-child").append("<th>Ponderación</th>");
      // calcular nota media e ponderación
      notaMedia();
    }
  }) 
});

function notaMedia(){
  // para cada fila calcular a nota media e a ponderación
  $("tr").each((index, element) =>{
    let suma = 0;
    let divisor = 0;
    if (index > 0){
      $(element).find("td").each((index, nota) =>{
        suma += parseFloat($(nota).text());
        divisor++;
      })
      media = parseFloat(suma / divisor).toFixed(2);
      pond = parseFloat(media *0.2).toFixed(2);

      // engadir nota media e ponderación
      $(element).append("<td>"+media+"</td>");
      $(element).append("<td>"+pond+"</td>");
      $(element).children().addClass((media>=5?"aprobado":"suspenso"))
    }
})
}

