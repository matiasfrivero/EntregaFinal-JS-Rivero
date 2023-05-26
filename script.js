/* MEJORES INTERESES Y BANCOS PARA INVERTIR */

/* 
  (OK)-bancos: (id, nombres, tasas de interes, resultado final)
  (OK)-arrayBancos: para agrupar todos los bancos
  (OK)-elegir un Banco para calcular:
    *mostrar opciones al usuario
    *recibir la opcion elegida por el usuario
    *individualizar al banco
  -ver viabilidad del banco (viable o no viable para invertir)
  -filtrar bancos para ver solo viables

*/

/* FUNCIONES */
/* Si el mensaje recibido no es un numero, se ejecutara hasta recibir uno */
function validarNumero(numero, mensaje){
  while(isNaN(numero)){
    alert("Ingresá un valor númerico.")
    numero = parseInt(prompt(mensaje));
  }
  return numero;
}

/* Creacion de Objeto y Arrays en Bancos */
class Bancos{
  constructor(id, nombre){
    this.id = id,
    this.nombre = nombre,
    this.tasa = [],
    this.final = ""
  }
}

const banco1 = new Bancos(1, "Macro");
const banco2 = new Bancos(2, "Naranja");
const banco3 = new Bancos(3, "BBVA");
const banco4 = new Bancos(4, "Santander");
const banco5 = new Bancos(5, "Galicia");

const BANCOS = [banco1,banco2,banco3,banco4,banco5];

function mensajeBienvenida(){
  /* Mensaje inicial para el simulador */
  alert("¡Bienvenido a nuestro simulador de inversiones!");
  let mensajeInicial = "Estos son los bancos disponibles para invertir. \n \n";
  /* Informacion de cada Banco */
  BANCOS.forEach(e => {
    mensajeInicial += `${e.id} - Banco ${e.nombre} \n`
  });
  /* Ejecutamos el mensaje y recibimos respuesta */
  let respuestaUser = parseInt(prompt(mensajeInicial));
  /* Aca se evalua que el valor ingresado sea numerico, no retorna hasta no tener un valor numerico. Aqui se representa el orden respectivo de los parametros declarados en la funcion */
  respuestaUser = validarNumero(respuestaUser, mensajeInicial)
  /* Individualiza los bancos segun el numero ingresado por el usuario */
  return BANCOS.find(elem => elem.id === respuestaUser);
}

function elegirTasa(banco){
  /* Evalua la cantidad de tasas bancarias indicadas */
  if (banco.tasa.length == 2){return alert("Ya ingresaste los valores de las tasas a corto y largo plazo, ahora calculemos tu resultado final")}
  /* Indica las tasas de cada entidad bancaria */
  alert(
    "Las tasas de los bancos son las siguientes: \n Banco Macro = 3% - 5% \n Banco Naranja = 4% - 6% \n Banco BBVA = 6% -7% \n Banco Santander = 2% - 8% \n Banco Galicia = 7% - 4%" 
    )
  /* Ingresara ambas tasas segun el banco seleccionado */
  let valorTasa = parseInt(prompt(`Ingrese la tasa ${banco.tasa.length + 1} del banco ${banco.nombre}`))
  /* Valida las tasas ingresadas */
  valorTasa = validarNumero(valorTasa, `Ingrese la tasa ${banco.tasa.length + 1} del banco ${banco.nombre}`)
  /* Pusheo al array tasa */
  banco.tasa.push(valorTasa)
}

const bancoSeleccionado = mensajeBienvenida();
elegirTasa(bancoSeleccionado);

function tasaFinal(banco){
  if (banco.tasa.length < 2){
    alert("Debes ingresar las dos tasas indicadas del banco que seleccionaste para llegar al resultado final.")
    return
  }




}