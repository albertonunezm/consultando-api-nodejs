const fetch = require("node-fetch2");

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((respuesta) => {
        return respuesta.json()
    }).then((resp) => {
        console.log(resp);
    })