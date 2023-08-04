import { mensajeServices } from "../service/cliente-service-hablar.js";

const formHablar = document.querySelector("[data-hablar]");

formHablar.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector("[data-nombreP]").value;
  const mensaje = document.querySelector("[data-mensajeP]").value;

  mensajeServices.crearMensaje(nombre, mensaje)
  .then(() => {
    console.log(nombre + " - " + mensaje);
    window.location.href = "../index.html"
  })
  .catch((err) => console.log(err));
});