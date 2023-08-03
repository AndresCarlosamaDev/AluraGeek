import { clienteServices } from "../service/cliente-service-hablar.js";

const formHablar = document.querySelector("[data-form-hablar]");

formHablar.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector("[data-nombre]").value;
  const mensaje = document.querySelector("[data-mensaje]").value;

  clienteServices.crearMensaje(nombre, mensaje)
  .then(() => {
    console.log(nombre + " - " + mensaje);
    window.location.href = "../index.html";
  })
  .catch((err) => console.error(err));
  console.log(err);
});