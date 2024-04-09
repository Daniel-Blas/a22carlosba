

// Creación da clase Dico

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

let disco1 = new Disco("Some girls", "Rolling Stones", "1969", "Rock", true);
let disco2 = new Disco("The Four Tops", "Reach Out", "1967", "R&B", false);
let disco3 = new Disco("Dire Straits", "Brothers in Arms", "1985", "Rock", false);
let disco4 = new Disco("Hüsker Dü", "New Day Rising","1985", "Hardcore Punk", true);

disco1.setAno("1977");
let libreria = new Libreria();
libreria.engadirDisco(disco1);
libreria.engadirDisco(disco2);
libreria.engadirDisco(disco3);
libreria.engadirDisco(disco4);
console.log(libreria.amosarDiscos());