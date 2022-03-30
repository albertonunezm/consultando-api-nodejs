import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
    .then((respuesta) => {
        return respuesta.json()
    }).then((resp) => {
        console.log(resp);
    })