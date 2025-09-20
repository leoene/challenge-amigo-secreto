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
        return;
    }

    if (amigos.includes(nombre)) {
        alert("El nombre ya se encuentra en la lista.");
        input.value = "";
        return;
    }

    amigos.push(nombre);

    input.value = "";

    mostrarAmigo();
}

//Paso 3

function mostrarAmigo() {
    const ul =  document.getElementById('listaAmigos');
    ul.innerHTML = ""

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        ul.appendChild(li);
    }
}

//Paso 4

function sortearAmigo () {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista.");
    }

    const amigoSorteo = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = `El amigo sorteado es ${amigoSorteo}.`;
}




