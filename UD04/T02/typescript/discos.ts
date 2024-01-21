

// Creación da clase Disco

class DiscoTs {

    nome : string;
    grupo : string;
    ano : string;
    tipo : string;
    prestado : boolean;

    // Constructor
    constructor(nome : string, grupo : string, ano : string, tipo : string, prestado : boolean){
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
    setNome(nome : string){this.nome = nome}
    setGrupo(grupo : string){this.grupo = grupo}
    setAno(ano : string){this.ano = ano}
    setTipo(tipo : string){this.tipo = tipo}
    setPrestado(prestado : boolean){this.prestado = prestado}

    mostrarInformacion(){
        return this.nome +", " +this.grupo +", " + this.ano +", " + this.tipo + (this.prestado?", prestado.":".");
    }

}

// Creación da clase libreria onde almacenaremos os díscos
class LibreriaTs {

    discos : DiscoTs[] = new Array(); 
    

    // Getter
    getDiscos(){return this.discos}

    // Funcións
    engadirDisco(disco : DiscoTs){
        this.discos.push(disco);
    }
    amosarDiscos(){
        let lista : string = "";
        for (let i = 0; i < this.discos.length; i++){
            lista += this.discos[i].mostrarInformacion() + "\n";
        }
        return lista;
    }
}


let discots1 = new DiscoTs("Some girls", "Rolling Stones", "1969", "Rock", true);
let discots2 = new DiscoTs("The Four Tops", "Reach Out", "1967", "R&B", false);
let discots3 = new DiscoTs("Dire Straits", "Brothers in Arms", "1985", "Rock", false);
let discots4 = new DiscoTs("Hüsker Dü", "New Day Rising","1985", "Hardcore Punk", true);

discots1.setAno("1977");
let libreriats = new LibreriaTs();
libreriats.engadirDisco(discots1);
libreriats.engadirDisco(discots2);
libreriats.engadirDisco(discots3);
libreriats.engadirDisco(discots4);
console.log(libreriats.amosarDiscos());
