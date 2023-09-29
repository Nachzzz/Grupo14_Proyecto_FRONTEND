const toggle = document.querySelector(".toggle")
const menuDashboard = document.querySelector(".menu-dashboard")
const iconoMenu = toggle.querySelector("i")
const enlacesMenu = document.querySelectorAll(".enlace")
const agregarSV = document.getElementById("añadirSv")
// Obtén una referencia al botón de "Cerrar" y al pop-up
const btnCerrarPopup = document.getElementById("btnCerrarPopup");
const popup = document.getElementById("popup");
//Evento que muestra la bandeja de chat al elegir un SV y Canal
const chatContainer = document.getElementById("cajachat")
// Obtén una referencia al botón de "Cerrar Chat" y a la bandeja de chat
const btnCerrarChat = document.getElementById("btnCerrarChat");
//Constantes de envío de mensajes
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const crearSvForm = document.getElementById("crearSv");
const servidoresCreados = document.getElementById("sv");


document.addEventListener("DOMContentLoaded", function () {
    const crearSvForm = document.getElementById("crearSv");
    const servidoresCreados = document.getElementById("sv");

    crearSvForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe normalmente

        // Obtiene los valores del formulario
        const serverNameInput = document.getElementById("serverName");
        const serverDescInput = document.getElementById("serverDesc");
        const nombreServidor = serverNameInput.value;
        const descripcionServidor = serverDescInput.value;

        // Crea un nuevo elemento div
        const nuevoServidor = document.createElement("div");
        nuevoServidor.className = "servidor";
        nuevoServidor.innerHTML = `<h3>${nombreServidor}</h3><p>${descripcionServidor}</p>`;

        // Agrega el nuevo servidor a la lista de servidores creados
        servidoresCreados.appendChild(nuevoServidor);

        // Cierra el popup
        const popup = document.getElementById("popup");
        popup.style.display = "none";

        // Limpia los campos del formulario
        serverNameInput.value = "";
        serverDescInput.value = "";
    });
});

// Función para agregar un mensaje al chat
function agregarMensaje(mensaje) {
    // Crea un elemento de párrafo para el mensaje
    const mensajeElemento = document.createElement("p");
    mensajeElemento.textContent = mensaje; // Establece el contenido del mensaje

    // Agrega el mensaje al elemento de mensajes del chat
    chatMessages.appendChild(mensajeElemento);

    // Desplázate automáticamente hacia abajo para mostrar el mensaje más reciente
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Agrega un evento de clic al botón
btnCerrarChat.addEventListener("click", function() {
    // Oculta la bandeja de chat
    chatContainer.style.display = "none";
});



// Agrega un evento de clic al botón de "Cerrar"
btnCerrarPopup.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    popup.style.display = "none"; // Oculta el pop-up al hacer clic en "Cerrar"
});

toggle.addEventListener("click", () => {
    menuDashboard.classList.toggle("open")

    if(iconoMenu.classList.contains("bx-menu")){
        iconoMenu.classList.replace("bx-menu", "bx-x")
    }else {
        iconoMenu.classList.replace("bx-x", "bx-menu")
    }
})

enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menuDashboard.classList.add("open")
        iconoMenu.classList.replace("bx-menu", "bx-x")
    })
})

agregarSV.addEventListener('click', () => popup.style.display = 'flex')

chatContainer.removeAttribute("hidden");

document.addEventListener("DOMContentLoaded", function () {
    const btnMostrarServidores = document.getElementById("btnMostrarServidores");
    const servidoresCreados = document.getElementById("servidoresCreados");

    // Ocultar la sección de servidores al principio
    servidoresCreados.style.display = "none";

    btnMostrarServidores.addEventListener("click", function () {
        // Alternar la visibilidad de la sección de servidores
        if (servidoresCreados.style.display === "none" || servidoresCreados.style.display === "") {
            servidoresCreados.style.display = "block";
        } else {
            servidoresCreados.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const servidoresCreados = document.getElementById("servidoresCreados");
    const cajachat = document.getElementById("cajachat");

    // Función para mostrar el chat
    function mostrarChat() {
        cajachat.style.display = "block";
    }

    // Verificar si hay servidores creados al cargar la página
    if (servidoresCreados.children.length > 0) {
        // No mostrar el chat en la página principal
    }

    // Agregar un evento cuando se hace clic en un servidor para mostrar el chat
    servidoresCreados.addEventListener("click", function (event) {
        const elementoClickeado = event.target;
        if (elementoClickeado.classList.contains("sv")) {
            mostrarChat();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    // Función para agregar un mensaje al chat
    function agregarMensaje(mensaje) {
        const nuevoMensaje = document.createElement("div");
        nuevoMensaje.className = "mensaje";
        nuevoMensaje.textContent = mensaje;
        chatMessages.appendChild(nuevoMensaje);
    }

    // Agregar un evento para el envío de mensajes
    sendButton.addEventListener("click", function () {
        const mensaje = messageInput.value;
        if (mensaje.trim() !== "") {
            agregarMensaje(mensaje);
            messageInput.value = ""; // Limpiar el campo de entrada
        }
    });

    // También puedes escuchar eventos de teclado (por ejemplo, al presionar Enter)
    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evitar que se agregue una nueva línea en el campo de entrada
            sendButton.click(); // Simular un clic en el botón de enviar
        }
    });
});


