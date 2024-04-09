// Creación da clase Disco
var DiscoTs = /** @class */ (function () {
    // Constructor
    function DiscoTs(nome, grupo, ano, tipo, prestado) {
        this.nome = nome;
        this.grupo = grupo;
        this.ano = ano;
        this.tipo = tipo;
        this.prestado = prestado;
    }
    // Getters
    DiscoTs.prototype.getNome = function () { return this.nome; };
    DiscoTs.prototype.getGrupo = function () { return this.grupo; };
    DiscoTs.prototype.getAno = function () { return this.ano; };
    DiscoTs.prototype.getTipo = function () { return this.tipo; };
    DiscoTs.prototype.getPrestado = function () { return this.prestado; };
    // Setters
    DiscoTs.prototype.setNome = function (nome) { this.nome = nome; };
    DiscoTs.prototype.setGrupo = function (grupo) { this.grupo = grupo; };
    DiscoTs.prototype.setAno = function (ano) { this.ano = ano; };
    DiscoTs.prototype.setTipo = function (tipo) { this.tipo = tipo; };
    DiscoTs.prototype.setPrestado = function (prestado) { this.prestado = prestado; };
    DiscoTs.prototype.mostrarInformacion = function () {
        return this.nome + ", " + this.grupo + ", " + this.ano + ", " + this.tipo + (this.prestado ? ", prestado." : ".");
    };
    return DiscoTs;
}());
// Creación da clase libreria onde almacenaremos os díscos
var LibreriaTs = /** @class */ (function () {
    function LibreriaTs() {
        this.discos = new Array();
    }
    // Getter
    LibreriaTs.prototype.getDiscos = function () { return this.discos; };
    // Funcións
    LibreriaTs.prototype.engadirDisco = function (disco) {
        this.discos.push(disco);
    };
    LibreriaTs.prototype.amosarDiscos = function () {
        var lista = "";
        for (var i = 0; i < this.discos.length; i++) {
            lista += this.discos[i].mostrarInformacion() + "\n";
        }
        return lista;
    };
    return LibreriaTs;
}());
var discots1 = new DiscoTs("Some girls", "Rolling Stones", "1969", "Rock", true);
var discots2 = new DiscoTs("The Four Tops", "Reach Out", "1967", "R&B", false);
var discots3 = new DiscoTs("Dire Straits", "Brothers in Arms", "1985", "Rock", false);
var discots4 = new DiscoTs("Hüsker Dü", "New Day Rising", "1985", "Hardcore Punk", true);
discots1.setAno("1977");
console.log(discots1.mostrarInformacion());
var libreriats = new LibreriaTs();
libreriats.engadirDisco(discots1);
libreriats.engadirDisco(discots2);
libreriats.engadirDisco(discots3);
libreriats.engadirDisco(discots4);
console.log(libreriats.amosarDiscos());
