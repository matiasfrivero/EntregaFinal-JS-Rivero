/* ENTREGA FINAL DEL SIMULADOR DE RESERVA DE TURNOS EN CINES */

// Bienvenida al sitio web
const bienvenida = document.getElementById("bienvenida");
bienvenida.innerHTML = `<h1>Hace tu Reserva en CinePlus</h1>
<P>Para que podamos registrar tu reserva, por favor, completá los datos que se iran presentando a continuación.</P>`

// Catalogo de peliculas
const catalogo1 = document.getElementById("catalogo1");
catalogo1.innerHTML = `<h2>Catálogo de Películas:</h2>
    <select class="reservation-select">
        <option value="">Seleccionar película</option>
        <option value="Avengers: Endgame">Avengers: Endgame</option>
        <option value="Titanic">Titanic</option>
        <option value="Inception">Inception</option>
        <option value="Pulp Fiction">Pulp Fiction</option>
        <option value="Avatar">Avatar</option>
    </select>`

// Horarios y salas disponibles
const horarios1 = document.getElementById("horarios1");
horarios1.innerHTML = `<h2>Horarios Disponibles:</h2>
    <select class="reservation-select">
        <option value="">Seleccionar horario y sala</option>
        <option value="Sala 1 - 12:00 hs">Sala 1 - 12:00 hs</option>
        <option value="Sala 2 - 14:00 hs">Sala 2 - 14:00 hs</option>
        <option value="Sala 2 - 18:00 hs">Sala 2 - 18:00 hs</option>
        <option value="Sala 3 - 20:00 hs">Sala 3 - 20:00 hs</option>
        <option value="Sala 1 - 23:00 hs">Sala 1 - 23:00 hs</option>
    </select>`

// Datos de la reserva
const datos1 = document.getElementById("datos1");
datos1.innerHTML = `<h2>Datos de la Reserva:</h2>
    <label for="nombre">Nombre y Apellido:</label>
    <input type="text" id="nombre" class="reservation-select"/>`

// Botones con funcion de reservar y limpiar campos
const botonesReserva = document.getElementById("reservation-button");
botonesReserva.innerHTML = `<button id="reservation-select">Reservar</button>
    <button id="clear-select">Limpiar</button>`

// Asignacion de los botones de reserva y limpiar
const selectElements = document.querySelectorAll(".reservation-select");
const reservationList = document.getElementById("reservation-list");
const reservationButton = document.getElementById("reservation-select");
const clearButton = document.getElementById("clear-select");

// Funcion para limpiar reserva y storage
clearButton.addEventListener('click', function() {
  localStorage.clear();
  reservationList.innerHTML = ("");
  selectElements.forEach((select) => {select.value = null;});
});

// Función para manejar el evento click del botón de reserva
reservationButton.addEventListener('click', function() {
  // Crear un array para almacenar las selecciones
  const reservations = [];

  // Recorrer los elementos select y guardar sus valores seleccionados en el array
  selectElements.forEach((select) => {
    const selectedValue = select.value;
    reservations.push(selectedValue);
  });

  // Convertir el array a una cadena JSON y almacenarlo en el localStorage
  localStorage.setItem('reservations', JSON.stringify(reservations));

  // Mostrar la lista de reservas en el div
  reservationList.innerHTML = reservations.join(`, `);
});

// Reservas realizadas
const reservasList = document.getElementById("reservation-list");
reservasList.innerHTML = ``

// Al cargar la página, mostrar las reservas almacenadas previamente
document.addEventListener('DOMContentLoaded', function() {
  const storedReservations = localStorage.getItem('reservations');
  if (storedReservations) {
    const reservations = JSON.parse(storedReservations);
    reservationList.innerHTML = reservations.join(', ');
  }
});