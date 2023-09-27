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

chatForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario
    const mensajeUsuario = messageInput.value; // Obtiene el mensaje del usuario
    agregarMensaje(mensajeUsuario); // Agrega el mensaje al chat
    messageInput.value = ""; // Limpia el campo de entrada después de enviar
});

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