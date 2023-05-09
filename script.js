/* Simulador Interactivo de Calculadora de Inversiones */

// Función para calcular el interés
function calcularInteres(capital, tasaInteres, tiempo) {
  let total = capital * Math.pow((1 + tasaInteres), tiempo);
  return total;
}

// Función para obtener el resultado
function resultado(total, tiempo) {
  alert(`El total de la inversión después de ${tiempo} años es: ${total.toFixed(2)}`);
  console.log(`El total de la inversión después de ${tiempo} años es: ${total.toFixed(2)}`);
}

// Función para ejecutar el simulador
function simularInversion() {
  let capital = parseFloat(prompt("Ingrese el capital inicial:"));
  let tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (%):")) / 100;
  let tiempo = parseInt(prompt("Ingrese el tiempo de inversión en años:"));
  
  let total = capital;
  for (let i = 1; i <= tiempo; i++) {
    total = calcularInteres(total, tasaInteres, 1);
    resultado(total, i);
  }

  alert("¡Gracias por utilizar nuestra web!")
}

simularInversion();