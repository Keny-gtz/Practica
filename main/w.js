
let btneliminar = document.getElementById("btnEliminar");
let nombre = document.getElementsByTagName("txtNombre").item(0);

if(localStorage.getItem("nombre")!=null){
let muestraNombre = localStorage.getItem("nombre");
encabezado1.innerText = `Hola! ${muestraNombre} bienvenido/a de nuevo 
Por favor ve al inicio e ingresa tu nombre `;
}

btneliminar.addEventListener("click", function(event){
    event.preventDefault();
localStorage.removeItem("nombre")
});


