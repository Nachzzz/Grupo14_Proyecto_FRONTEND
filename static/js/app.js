/*document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Obtener los valores de los campos del formulario
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const mail = document.getElementById("mail").value.trim();
      const datos = document.getElementById("datos").value.trim();
      const dia = document.getElementById("dia").value;
      const mes = document.getElementById("mes").value;
      const anio = document.getElementById("anio").value;

      // Validar cada campo individualmente
      if (username === "") {
          alert("Por favor, ingresa un nombre de usuario.");
          return;
      }

      if (password === "") {
          alert("Por favor, ingresa una contraseña.");
          return;
      }

      if (mail === "") {
          alert("Por favor, ingresa un correo electrónico.");
          return;
      }

      if (datos === "") {
          alert("Por favor, ingresa tu nombre y apellido.");
          return;
      }

      if (dia === "" || mes === "" || anio === "") {
          alert("Por favor, selecciona una fecha de nacimiento válida.");
          return;
      }

      // Si todos los campos son válidos, puedes enviar el formulario
      alert("Formulario válido. Enviando datos...");

      // Mostrar los valores en la consola
      console.log("Nombre de Usuario:", username);
      console.log("Contraseña:", password);
      console.log("Correo electrónico:", mail);
      console.log("Nombre y Apellido:", datos);
      console.log("Fecha de Nacimiento:", dia, mes, anio);

      // Aquí puedes agregar el código para enviar el formulario al servidor
      // form.submit(); // Descomenta esta línea para enviar el formulario realmente
  });
});
*/