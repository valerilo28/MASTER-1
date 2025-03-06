
let librosLeidos = [];

function agregarLibro(titulo){

            librosLeidos.push(titulo);

} // debe añadir un libro al array

function mostrarLibrosLeidos(){

    console.log(librosLeidos);

} // debe imprimir los libros leídos

while (true){
    let titulo = prompt("Ingresa el titulo de un libro que hayas leido: ");
    if(!titulo) break;
    agregarLibro(titulo);
}

mostrarLibrosLeidos();