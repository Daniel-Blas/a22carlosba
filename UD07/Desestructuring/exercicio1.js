

// Obxetos e Arrays


let paises = ["España", "Portugal", "Andorra", "Francia", "Marrocos", "Reino Unido", "Irlanda", "Suiza", "Bélxica"];


class Disco {

    // Constructor
    constructor(nome, grupo, ano, tipo, prestado){
        this.nome = nome;
        this.grupo = grupo;
        this.ano = ano;
        this.tipo = tipo;
        this.prestado = prestado;
    }

    // Getters
    getNome(){return this.nome}
    getGrupo(){return this.grupo}
    getAno(){return this.ano}
    getTipo(){return this.tipo}
    getPrestado(){return this.prestado}

    // Setters
    setNome(nome){this.nome = nome}
    setGrupo(grupo){this.grupo = grupo}
    setAno(ano){this.ano = ano}
    setTipo(tipo){this.tipo = tipo}
    setPrestado(prestado){this.prestado = prestado}

    mostrarInformacion(){
        return this.nome +", " +this.grupo +", " + this.ano +", " + this.tipo + (this.prestado?", prestado.":".");
    }

}

// Creación da clase libreria onde almacenaremos os díscos
class Libreria {
    
    constructor(){
        this.discos = new Array();
    }

    // Getter
    getDiscos(){return this.discos}

    // Funcións
    engadirDisco(disco){
        this.discos.push(disco)
    }
    amosarDiscos(){
        let lista = "";
        for (let i = 0; i < this.discos.length; i++){
            lista += this.discos[i].mostrarInformacion() + "\n";
        }
        return lista;
    }
}

let disco1 = new Disco("Some girls", "Rolling Stones", "1969", "Rock", false);
let disco2 = new Disco("Reach Out", "The Four Tops", "1967", "R&B", true);
let disco3 = new Disco("Brothers in Arms", "Dire Straits", "1985", "Rock", false);
let disco4 = new Disco("New Day Rising", "Hüsker Dü","1985", "Hardcore Punk", true);
let disco5 = new Disco("Siamese Dream", "The Smashing Pumpkins","1993", "Punk Rock", false);
let disco6 = new Disco("Live at Leeds", "The Who","1970", "Rock", false);


disco1.setAno("1977");
let libreria = new Libreria();
libreria.engadirDisco(disco1);
libreria.engadirDisco(disco2);
libreria.engadirDisco(disco3);
libreria.engadirDisco(disco4);
libreria.engadirDisco(disco5);
libreria.engadirDisco(disco6);
// console.log(libreria.amosarDiscos());


// 1.1 Acceder a algunhas propiedades:
const getAlbumInfo = ({nome, grupo, ano}) => `Album: ${nome}, Artista: ${grupo}, Ano: ${ano}`;
console.log(getAlbumInfo(disco5));

// 1.2 Fai unha copia dun obxecto.
const novoDisco = {
    ...disco3
};
console.log(novoDisco.nome);

// 1.3 Fai unha copia dun obxecto e redefine algún valor dalgunha propiedade do obxecto.
const novoDisco2 = {
    ...disco3,
    ano : 2010,
};
console.log(novoDisco2.ano);

// 1.4 Fai unha copia dun obxecto e redefine algún nome dalgunha propiedade do obxecto.
const {nome : album} = disco3;
console.log("Nome do album:", album);

// 1.5 Acceder a algúns dos valores dun Array, é dicir, ignora algúns dos valores. Proba polo comezo, polo fin, polo medio,...
const [primeiro, segundo, tercero, medio, ...resto] = paises;
console.log("Primeiro:", primeiro);
console.log("Medio:", medio);
const [ultimo, ...primeros] = paises.reverse();
console.log("Último:", ultimo);
paises.reverse();

// 1.6 Usa algún exemplo con desestructuración e for ... of

console.log("Discos no prestados:")
for (const {
    nome: n,
    prestado: p,
} of libreria.getDiscos()){
    if (!p)
        console.log(n)
}
