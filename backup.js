/* Simulador Interactivo de Calculadora de Inversiones */

// Función para calcular el interés
  function calcularInteres(capital, tasaInteres, tiempo) {
    let total = capital * Math.pow((1 + tasaInteres), tiempo);
    return total;
  }
  
// Función para obtener el resultado
  function resultado(total, tiempo) {
    alert(`El total de la inversión después de ${tiempo} año/s es: ${total.toFixed(2)}`);
    console.log(`El total de la inversión después de ${tiempo} año/s es: ${total.toFixed(2)}`);
  }
  
// Función para ejecutar el simulador
  function simularInversion() {
    alert("¡Bienvenido a nuestra calculadora de inversiones!");
    let bancos = prompt("¿A que banco estas afiliado?").toLowerCase()
    if ((bancos === "macro") || (bancos === "naranja") || (bancos === "bbva") || (bancos === "santander")){
      alert("¡Tu banco es compatible con nuestro simulador de inversión!");{
        let capital = parseFloat(prompt("Ingrese el capital inicial:"));
        let tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (%):")) / 100;
        let tiempo = parseInt(prompt("Ingrese el tiempo de inversión en años:"));
        
        let total = capital;
        for (let i = 1; i <= tiempo; i++) {
          total = calcularInteres(total, tasaInteres, 1);
          resultado(total, i);
        }
      
        alert("¡Gracias por utilizar nuestra web!");
      }
    }else{
      alert("Tu banco no es compatible con nuestro simulador de inversión :(");
    }
  
  }
  
  simularInversion();
  
/* Agregar como Objeto los Bancos, que incluya el condicional if que ya agregue */
  
  class Bancos{
    constructor(nombre, tasa){
      this.nombre = nombre,
      this.tasa = tasa
    }
  }
  
  const banco1 = new Bancos("santander", 70);
  const banco2 = new Bancos("bbva", 80);
  const banco3 = new Bancos("macro", 90);
  const banco4 = new Bancos("naranja", 100);