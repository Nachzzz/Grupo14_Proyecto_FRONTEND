// Función para cargar y mostrar los canales
function cargarCanales() {
    // Realiza una solicitud AJAX para obtener la lista de canales desde el servidor
    fetch('/obtenerCanales')  // Asegúrate de tener una ruta en Flask para obtener los canales
        .then(response => response.json())
        .then(data => {
            const canalesContainer = document.getElementById("servidoresCreados");

            // Borra cualquier contenido existente en el contenedor de canales
            canalesContainer.innerHTML = "";

            // Recorre la lista de canales y crea elementos para mostrarlos
            data.canales.forEach(canal => {
                const canalElemento = document.createElement("div" );
                canalElemento.classList.add("sv");
                canalElemento.textContent = canal.nombre; // Mostrar el nombre del canal
                canalesContainer.appendChild(canalElemento);
            });
        })
        .catch(error => {
            console.error("Error al cargar los canales:", error);
        });

        
}



// Llama a la función para cargar los canales cuando se carga la página
window.addEventListener("load", cargarCanales);

