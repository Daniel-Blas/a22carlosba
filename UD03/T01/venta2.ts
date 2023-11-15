
let url :string;
let protocolo : string;
let navegador : string;
let java : boolean;

url = document.getElementById("url");
protocolo = document.getElementById("protocolo");
navegador = document.getElementById("navegador");
java = document.getElementById("java");

url!.innerHTML= "URL: " +window.location;
protocolo!.innerHTML= "Protocolo: " +window.location.protocol;
navegador!.innerHTML= "Navegador: " +window.navigator.appCodeName;
java!.innerHTML= "Java dispoñible: " +(window.navigator.javaEnabled()?"Sí":"No");