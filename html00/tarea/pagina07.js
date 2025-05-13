const button = document.getElementById("button");

button.addEventListener("click", () => {
    const usuario = document.getElementById("user").value;
    const contrasena = document.getElementById("password").value;
    alert("Usuario: " + usuario + "\nContraseña: " + contrasena);
});