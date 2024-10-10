// Obtener elementos
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

// Al hacer clic en el botón, se muestra el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Al hacer clic en la "X", se cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Al hacer clic fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
