let url = document.getElementById("url");
let protocolo = document.getElementById("protocolo");
let navegador = document.getElementById("navegador");
let java = document.getElementById("java");

url!.innerHTML= "URL: " +window.location;
protocolo!.innerHTML= "Protocolo: " +window.location.protocol;
navegador!.innerHTML= "Navegador: " +window.navigator.appCodeName;
java!.innerHTML= "Java dispoñible: " +(window.navigator.javaEnabled()?"Sí":"No");