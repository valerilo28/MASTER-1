/*
    Objetivo
El objetivo es agregar un archivo o varios a tu repositorio y que contenga(n) la solución al problema planteado a continuación.

Problema: Caja de Comentarios (Simple Comment Box)
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página.
Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Instrucciones para resolver el problema:
Crea una página con un formulario que tenga un campo de texto para el
comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en
la página debajo del formulario.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
Los comentarios deben aparecer junto con la fecha y hora de publicación.(opcional)
 */

document.addEventListener("DOMContentLoaded", () => {
    const inputComentario = document.getElementById("comentario");
    const botonAgregar = document.getElementById("agregarComentario");
    const listaComentarios = document.getElementById("listaComentarios");

    botonAgregar.addEventListener("click", () => {
        const texto = inputComentario.value.trim();
        if (texto === "") {
            alert("Por favor, escribe un comentario.");
            return;
        }

        const divComentario = document.createElement("div");
        divComentario.classList.add("comentario");

        //Agerga el texto del comentario
        const pTexto = document.createElement("p");
        pTexto.textContent = texto;

        // Agregar la fecha y hora
        const fecha = new Date().toLocaleString();
        const pFecha = document.createElement("p");
        pFecha.classList.add("fecha");
        pFecha.textContent = `Publicado el: ${fecha}`;

        // Botón para eliminar comentario
        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.textContent = "QUITAR";
        botonEliminar.addEventListener("click", () => {
            listaComentarios.removeChild(divComentario);
        });

        // Agregar elementos al div del comentario
        divComentario.appendChild(pTexto);
        divComentario.appendChild(pFecha);
        divComentario.appendChild(botonEliminar);

        // Agregar el comentario a la lista
        listaComentarios.appendChild(divComentario);

        inputComentario.value = "";
    });
});
