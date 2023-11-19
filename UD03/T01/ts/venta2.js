var url = document.getElementById("url");
var protocolo = document.getElementById("protocolo");
var navegador = document.getElementById("navegador");
var java = document.getElementById("java");
url.innerHTML = "URL: " + window.location;
protocolo.innerHTML = "Protocolo: " + window.location.protocol;
navegador.innerHTML = "Navegador: " + window.navigator.appCodeName;
java.innerHTML = "Java dispoñible: " + (window.navigator.javaEnabled() ? "Sí" : "No");
