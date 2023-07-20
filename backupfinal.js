/* ENTREGA FINAL DEL SIMULADOR DE RESERVA DE TURNOS EN CINES */

/* CORRECCIONES PARA APROBAR */
// QUITAR PROMPTS Y ALERTS, INSERTAR EL CODIGO HTML DESDE EL DOM DE JS, NO TENER CODIGO DE JS EN EL HTML, EN CUANTO A FUNCIONALIDAD QUE SE BLANQUEEN LOS SELECTS AL RESERVAR

// Bienvenida al sitio web
const bienvenida = document.getElementById("bienvenida");
bienvenida.innerHTML = `<h1>Hace tu Reserva en CinePlus</h1>
<P>Para que podamos registrar tu reserva, por favor, completá los datos que se iran presentando a continuación.</P>`

// Catalogo de peliculas
const catalogo1 = document.getElementById("catalogo1");
catalogo1.innerHTML = `<h2>Catálogo de Películas:</h2>
    <select>
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
    <select>
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
    <input type="text" id="nombre" />`

// Botones con funcion de reservar y limpiar campos
const selectElements = document.querySelectorAll(".btnReserva");
const cajaReserva = document.getElementById("turnos-reservados")

// Reservas realizadas
const reservas1 = document.getElementById("reservas1");
reservas1.innerHTML = `<h2>Turnos Reservados:</h2>
        <ul id="catalogo"></ul>
        <ul id="turnos-reservados"></ul>`

// Obtener referencia al elemento de lista ul de turnos
const listaTurnos = document.getElementById('turnos-reservados');

// Obtener los turnos reservados del localStorage
let turnosReservados = JSON.parse(localStorage.getItem('turnosReservados')) || [];

// Mostrar los turnos reservados en la página
mostrarTurnosReservados();

/* AGREGAR FUNCION PARA PUSHEAR HORARIO Y SALA DE RESERVA A UN ARRAY*/
function agregarHorario(){
  const horarioInput = document.getElementById('horario');
  const horario = horarioInput.value.trim();
 
}

function agregarReserva(){
  const nombreInput = document.getElementById('nombre');
  const nombre = nombreInput.value.trim();

  if (nombre !== '') {
    // Crear un objeto reserva con el nombre y la fecha actual
    const reserva = {
      nombre,
      fecha: new Date().toLocaleString()
    };

    // Agregar la reserva al array de turnos reservados
    turnosReservados.push(reserva);

    // Guardar los turnos reservados en el localStorage
    localStorage.setItem('turnosReservados', JSON.stringify(turnosReservados));

    // Mostrar los turnos reservados en la página
    mostrarTurnosReservados();

    // Limpiar el campo de nombre
    nombreInput.value = '';
  }

}

function mostrarTurnosReservados(){
  // Limpiar la lista de turnos reservados
  listaTurnos.innerHTML = '';

  // Iterar sobre los turnos reservados y crear elementos li para mostrarlos
  for (const reserva of turnosReservados) {
    const li = document.createElement('li');
    li.textContent = `${reserva.nombre} - ${reserva.fecha} - `;
    listaTurnos.appendChild(li);
  }
}

// Obtener referencia al elemento de lista ul para peliculas
const catalogo = document.getElementById('catalogo');

// Array para almacenar las películas del catálogo
let peliculasCatalogo = [];

function agregarPelicula() {
  const peliculasSelect = document.getElementById('peliculas');
  const peliculaSeleccionada = peliculasSelect.value;

  if (peliculaSeleccionada !== '') {
    // Verificar si la película ya existe en el catálogo
    if (!peliculasCatalogo.includes(peliculaSeleccionada)) {
      // Agregar la película al catálogo
      peliculasCatalogo.push(peliculaSeleccionada);

      // Mostrar la película en la lista del catálogo
      const li = document.createElement('li');
      li.textContent = peliculaSeleccionada;
      catalogo.appendChild(li);
    }

    // Restablecer el valor seleccionado en el select
    peliculasSelect.value = '';
  }
}

function limpiarReservas() {
  // Limpiar el array de turnos reservados
  turnosReservados = [];

  // Limpiar el localStorage
  localStorage.removeItem('turnosReservados');

  // Limpiar la lista en la página
  mostrarTurnosReservados();
  alert('Borraste tus reservas, por favor realiza una nuevamente.')
}

/* NUEVO CONTENIDO */

// Crear un botón dinámicamente
const button = document.createElement('button');
button.textContent = 'Reservar';
document.body.appendChild(button);

// Crear una caja para mostrar la reserva
const reservationBox = document.createElement('div');
document.body.appendChild(reservationBox);

// Función para manejar el evento click del botón
button.addEventListener('click', function() {
  // Obtener la fecha y hora actual
  const now = new Date();
  
  // Formatear la fecha y hora en formato legible
  const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

  // Mostrar la reserva en la caja
  reservationBox.textContent = `Reservado para: ${formattedDateTime}`;
});

// Crear un botón para limpiar la caja de reserva
const clearButton = document.createElement('button');
clearButton.textContent = 'Limpiar';
document.body.appendChild(clearButton);

// Función para manejar el evento click del botón de limpiar
clearButton.addEventListener('click', function() {
  // Limpiar la caja de reserva
  reservationBox.textContent = '';
});


/* AGREGAR ARRAY CON OBJETOS (PELICULAS Y HORARIOS), CANTIDAD DE ENTRADAS, ORGANIZACION */