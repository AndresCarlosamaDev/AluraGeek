import { productoServices } from "../service/cliente-service-admin.js";

const nuevoProducto = ( imgProd, categoriaProd, nombreProd, precioProd, descripcionProd, id) => {
  const item = document.createElement("div");
  const constentItem = `
    <div class="productos_product">
    <div class="productos_product-img-icon">
        <div class="productos_product-iconos">
            <a href="editProducto.html?id=${id}"><img class="productos_product-icon" src="img/lapiz.svg"></a>
            <button class="productos_product-icon-btn" type="button" id="${id}"><img class="productos_product-icon-del" src="img/basura.svg"></button>
        </div>
        <div class="productos_product-img">
            <img src="${imgProd}">
        </div>
    </div>
    <h3 class="productos_product_title">${nombreProd}</h3>
    <h3 class="productos_product_price">$ ${precioProd}</h3>
    <a class="productos_product_link" href="#">Ver producto</a>
    </div>
    `;
    item.innerHTML = constentItem;
    const btnBorrar = item.querySelector("button");
    btnBorrar.addEventListener('click', () => {
        const id = btnBorrar.id;
        productoServices.eliminarProducto(id)
        .then( (response) => {
            console.log(response);
        }).catch( err => alert("Ocurrio un error") );
    });

  return item;
};

const containerProd = document.querySelector("[data-containProd]");

productoServices
  .listaProductos()
  .then((data) => {
    data.forEach(
      ({ imgProd, categoriaProd, nombreProd, precioProd, descripcionProd, id }) => {
        const producto = nuevoProducto( imgProd, categoriaProd, nombreProd, precioProd, descripcionProd, id);
        containerProd.appendChild(producto);
      });
  })
  .catch((err) => alert("Ocurrio un error"));
