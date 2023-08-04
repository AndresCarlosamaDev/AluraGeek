//Fetch API
//Comunicacion con el servidor

//Crear Mensaje
const crearMensaje = (nombre, mensaje) => {
    return fetch("https://json-server-vercel-ten-liard.vercel.app/habla", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, mensaje, id: uuid.v4() }),
    });
};

export const mensajeServices = {
    crearMensaje,
};