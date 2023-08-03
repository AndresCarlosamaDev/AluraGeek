import { productoServices } from "../service/cliente-service-admin.js";

const formulario = document.querySelector('[data-editarProd]');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    const imagen = document.querySelector('[data-imagen]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;
    
    //console.log(imagen, categoria, nombre, precio, descripcion)

    productoServices.reemplazarProducto(imagen, categoria, nombre, precio, descripcion, id)
    .then(() => {
        window.location.href = "/success.html"
    });
});

const infoProducto = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector('[data-imagen]');
    const categoria = document.querySelector('[data-categoria]');
    const nombre = document.querySelector('[data-nombre]');
    const precio = document.querySelector('[data-precio]');
    const descripcion = document.querySelector('[data-descripcion]');

    productoServices.detalleProducto(id).then(( producto ) => {
        imagen.value = producto.imgProd;
        categoria.value = producto.categoriaProd;
        nombre.value = producto.nombreProd;
        precio.value = producto.precioProd;
        descripcion.value = producto.descripcionProd;
    });
};

infoProducto();