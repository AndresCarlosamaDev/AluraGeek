//Fetch API
//Comunicacion con el servidor

//Leer productos
const listaProductos = () => {
    return fetch("http://localhost:3000/productos").then((response) => response.json());
}

//Crear producto
const crearProducto = (imgProd, categoriaProd, nombreProd, precioProd, descripcionProd) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ imgProd, categoriaProd, nombreProd, precioProd, descripcionProd, id: uuid.v4()}),
    });
};

//Eliminar producto
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    })
}


//Actualizar producto
const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then(( response ) => response.json())
};

const reemplazarProducto = (imgProd, categoriaProd, nombreProd, precioProd, descripcionProd, id) => {
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ imgProd, categoriaProd, nombreProd, precioProd, descripcionProd })
    })
    .then((response) => response)
    .catch((err) => console.log(err));
}


export const productoServices = {
    crearProducto,
    detalleProducto,
    listaProductos,
    eliminarProducto,
    reemplazarProducto,
}