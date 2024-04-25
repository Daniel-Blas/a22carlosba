$().ready(() => {
  // Ex 1: As filas pares deberán ter color diferente ás impares  
  $("#mitabla tr:nth-child(even)").addClass("colorido");
  // Ex 2: Calcular a media e a ponderación
  $("#calcular").click(() =>{
    // engadir columna nota media (se non existe)
    $("tr:first-child").append("<th>Nota Media</th>");
    // calcular nota media
    $("tr").each((index) =>{
      console.log(index);
    })
    // engadir nota media
    // engadir columna ponderación
    // calcular ponderación
    // engadir ponderación
  }) 
  });
  
  
$("tr").append("<th>Hola</th>")


//   Deberá tamén ter un botón que, cando se prema, calcule a nota media das tarefas e a súa
// ponderación final (20% da nota na avaliación). Esas dúas últimas columnas poden xerarse en
// tempo de execución ou telas creadas xa previamente no HTML, queda á túa escolla.