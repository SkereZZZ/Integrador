// Lista de usuarios y contraseñas válidas
const validUsers = {
    "admin": "administrador",
    "user1": "password1",
    "user2": "password2"
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar el envío del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    // Verificar si el usuario y la contraseña coinciden
    if (validUsers[username] && validUsers[username] === password) {
        // Si el login es exitoso, redirigir a Cliente.html
        window.location.href = "Cliente.html";
    } else {
        // Mostrar mensaje de error si el usuario o contraseña no son correctos
        errorMsg.textContent = "Usuario o contraseña incorrectos";
    }
});