/* TERCER PRE ENTREGA SIMULADOR DE RESERVA DE TURNOS EN CINES */

// Bienvenida al sitio web
alert('¡Bienvenido al sitio oficial de CinePlus!');

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
  alert('¡Tu turno se registró existosamente!');
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

/* AGREGAR SALAS, HORARIOS, CANTIDAD DE ENTRADAS, ORGANIZACION */