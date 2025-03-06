
class libro {
        constructor(titulo, autor, anio, estado){
            this.titulo = titulo;
            this.autor = autor;
            this.anio = anio;
            this.estado = estado;
        }
        info_libro(){
            console.log(`El libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, contiene ${this.capitulos} capítulos, actualmente está ${this.estado}.`);
        }

        op_estado(estado_actual) {
            if(estado_actual == 'disponible' || estado_actual =='prestado'){
                this.estado = estado_actual;
            } 
            else {
                console.log("Estado inválido. Ingresa 'disponible' o 'prestado'");
            }
        }

}

let librosLeidos = [];

function agregarLibro(titulo){

            librosLeidos.push(titulo);

} // debe añadir un libro al array

function mostrarLibrosLeidos(){

    console.log(librosLeidos);

} // debe imprimir los libros leídos

let titulo = prompt("Ingresa el titulo del libro: ");
let autor = prompt("Ingresa el autor del libro: ");
let anio = parseInt(prompt("Ingresa el año del libro: "));
let estado = prompt("Ingresa el estado del libro: ");
let capitulos = parseInt(prompt("Capítulos: "));

let mi_libro = new libro (titulo, autor, anio, estado);

mi_libro.info_libro();


/*while (true){
    let titulo = prompt("Ingresa el titulo de un libro que hayas leido: ");
    if(!titulo) break;
    agregarLibro(titulo);
}*/

mostrarLibrosLeidos();