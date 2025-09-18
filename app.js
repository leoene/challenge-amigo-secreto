// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Ingresar nombres y hacer sorteo para saber el amigo secreto
//Click en añadir y te aparecen los nombres en pantalla
//Validacion de datos de entrada. "Por favor ingrese un nombre valido"
//Sortear amigo - > El amigo secreto es:

//Array para almacenar los nombres
let amigos = []

console.log(amigos);

//Implementar una función para agregar amigos

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        alert('Por favor, inserte un nombre.');
    }

    if (amigos.includes(nombre)) {
        alert("El nombre ya se encuentra en la lista.")
    }

    amigos.push(nombre);

    input.value = "";


}


