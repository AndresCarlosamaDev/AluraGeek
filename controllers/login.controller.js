import { clientServices } from "../service/cliente-service-login.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-password]').value;

    clientServices.crearCliente(email, password)
    .then(() => {
        window.location.href = "../productos.html"
    })
    .catch((err) => console.log(err));
});