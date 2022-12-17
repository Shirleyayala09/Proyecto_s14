//Mostramos todos los usuarios
function getUsers() {
    fetch('http://localhost:9000/api/users')
    .then(response => response.json())
    .then(data => console.log(data))
}

//usuario
function getUserbyId(id){
    fetch( `http://localhost:9000/api/users/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
}

//MUESTRA TODOS
 
getUsers();

//MUESTRA SOLO 1/ID

getUserbyId('639cf499146b079638f00e8a')