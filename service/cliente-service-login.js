//Fetch API
//Comunicacion con el servidor

//Crear cliente
const crearCliente = (email, password) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, id: uuid.v4()}),
    });
};

export const clientServices = {
    crearCliente,
};