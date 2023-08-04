//Fetch API
//Comunicacion con el servidor
const servidorNube = "https://json-server-vercel-ten-liard.vercel.app/";
const servidorLocal = "http://localhost:3000/";
//Leer productos
const listaProductos = () => {
    return fetch("https://json-server-vercel-ten-liard.vercel.app/productos").then((response) => response.json());
}

//Crear producto
const crearProducto = (imgProd, categoriaProd, nombreProd, precioProd, descripcionProd) => {
    return fetch("https://json-server-vercel-ten-liard.vercel.app/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ imgProd, categoriaProd, nombreProd, precioProd, descripcionProd, id: uuid.v4()}),
    });
};

//Eliminar producto
const eliminarProducto = (id) => {
    return fetch(`https://json-server-vercel-ten-liard.vercel.app/productos/${id}`, {
        method: "DELETE"
    })
}


//Actualizar producto
const detalleProducto = (id) => {
    return fetch(`https://json-server-vercel-ten-liard.vercel.app/productos/${id}`).then(( response ) => response.json())
};

const reemplazarProducto = (imgProd, categoriaProd, nombreProd, precioProd, descripcionProd, id) => {
    return fetch(`https://json-server-vercel-ten-liard.vercel.app/productos/${id}`,{
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