import { productoServices } from "../service/cliente-service-admin.js";

const formularioProd = document.querySelector("[data-agregarProd]");

formularioProd.addEventListener("submit", (e) => {
  e.preventDefault();

  const imagenProd = document.querySelector("[data-imagen]").value;
  const categoriaProd = document.querySelector("[data-categoria]").value;
  const nombreProd = document.querySelector("[data-nombre]").value;
  const precioProd = document.querySelector("[data-precio]").value;
  const descripcionProd = document.querySelector("[data-descripcion]").value;

  productoServices.crearProducto(
    imagenProd,
    categoriaProd,
    nombreProd,
    precioProd,
    descripcionProd
  ).then(() => {
    window.location.href = "../productos.html"
  })
  .catch((err) => console.log(err));
});
