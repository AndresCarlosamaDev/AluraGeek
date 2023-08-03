//Fetch API
//Comunicacion con el servidor

//Crear cliente
const crearMensaje = (nombre, mensaje) => {
    return fetch("http://localhost:3000/habla", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, mensaje }),
    });
};

export const clienteServices = {
    crearMensaje,
};