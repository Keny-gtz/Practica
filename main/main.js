
let txtNombre = document.getElementById("txtNombre");
let btnenviar = document.getElementById("btnenviar");


btnenviar.addEventListener("click", function(event){
    event.preventDefault();
let nombre = txtNombre.value;
localStorage.setItem("nombre",nombre)
});



