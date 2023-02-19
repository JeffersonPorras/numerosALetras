const unidades = [
  { numero: 0, letras: "Cero" },
  { numero: 1, letras: "Uno" },
  { numero: 2, letras: "Dos" },
  { numero: 3, letras: "Tres" },
  { numero: 4, letras: "Cuatro" },
  { numero: 5, letras: "Cinco" },
  { numero: 6, letras: "Seis" },
  { numero: 7, letras: "Siete" },
  { numero: 8, letras: "Ocho" },
  { numero: 9, letras: "Nueve" },
];
const decenas = [
  { numero: 0, letras: ""},
  { numero: 1, letras: "Deici" },
  { numero: 2, letras: "Veinti" },
  { numero: 3, letras: "Trienta y " },
  { numero: 4, letras: "Cuarenta y " },
  { numero: 5, letras: "Cincuenta y " },
  { numero: 6, letras: "Sesenta y " },
  { numero: 7, letras: "Setenta y " },
  { numero: 8, letras: "Ochenta y " },
  { numero: 9, letras: "Noventa y " },
];
const numerosDeExcepcionDeDecenas = [
  { numero: 10, letras: "Diez" },
  { numero: 11, letras: "Once" },
  { numero: 12, letras: "Doce" },
  { numero: 13, letras: "Trece" },
  { numero: 14, letras: "Catorce" },
  { numero: 15, letras: "Quince" },
  { numero: 20, letras: "Veinte" },
];
const numerosDeExcepcionDeCentenas = [
  { numero: 1, letras: "Ciento" },
  { numero: 5, letras: "Quinientos " },
  { numero: 7, letras: "Sete" },
  { numero: 9, letras: "Nove" },
];
/**
 * Esta Funcion indica si el usuario ingreso un numero esta procede a hacer
 * la validacion si  ingresan un numero retorna el true que quiere decir que si esta recibiendo un numero
 * pero si el usuario ingresa  otro caracter distinto a un numero retorna un false
 */
function siEsUnNumero(numero) {
  if (isNaN(numero)) {
    return false;
  } else {
    return true;
  }
}
/**
 * Esta Funcion verifica la longitud del array para asi determinar si el numero contine solo unidades ejemplo :(1),
 * si es un numero que entra en las decenas ejemplo: (12) o  queda entre el caso de las centenas osea que tiene tres cifras ejemplo: (123)
 * y devuelve entre que caso se encuentra  retorna el strings obetenido ejemplo: "unidades" si fuera el primer caso
 */
function conseguirUnidadesDecenasOCentenas(numeroEnString) {
  let valorARetornar = "";
  let arrayDelNumero = numeroEnString.split("");
  console.log(arrayDelNumero);
  switch (arrayDelNumero.length) {
    case 1:
      valorARetornar = "Unidades";
      break;
    case 2:
      valorARetornar = "Decenas";
      break;
    case 3:
      valorARetornar = "Centenas";
      break;
    default:
      break;
  }
  return valorARetornar;
}
/**esta Funcion toma el numero, lo evalua en que caso se encuentra si en el de unidades, decenas o centenas,
 * luego hace el llamado a las funciones dentro del caso que corresponda para que haga las validaciones con las excepciones correspondientesdependiendo la funcion que ha llamado el caso
 * para asi retornar el numero en su forma escrita*/
function construirCadena(numero, unidadAEvaluar) {
  let unidad = "";
  let decena = "";
  let centena = "";
  let arrayDelNumero = numero.split("");
  debugger
  switch (unidadAEvaluar) {
    case "Unidades":
      unidad = conseguirCadenaDeLaUnidad(arrayDelNumero[0])
            break;
    case "Decenas":
      decena = excepcionesDecena(numero)
        if (decena === null) {
          decena = conseguirCadenaDeLaDecena(arrayDelNumero[0]+arrayDelNumero[1]);
          unidad = conseguirCadenaDeLaUnidad(arrayDelNumero[1], true);
          //en este caso la posicion [0] del array pasa a ser de las decenas y la unidad queda con la posicion [1] del array
        }
      break;
    case "Centenas":
            centena = conseguirCadenaDeLaCentena(arrayDelNumero[0],arrayDelNumero[1],arrayDelNumero[2])
            decena = excepcionesDecena(arrayDelNumero[1]+arrayDelNumero[2])
            if (decena === null) {
              console.log(arrayDelNumero[1]+arrayDelNumero[2]);
              decena = conseguirCadenaDeLaDecena(arrayDelNumero[1]+arrayDelNumero[2]);
              unidad = conseguirCadenaDeLaUnidad(arrayDelNumero[2], true);
              //en este caso la posicion [0] del array pasa a ser de las centenas, las decenas quedan con la posicion [1]
              // del array y por ultimo la unidad queda con la posicion [2] del array
            }

      break;
    default:
      break;
  }
  return `${centena}${decena}${unidad}`.toLowerCase();
}

/**esta Funcion toma las unidades del numero y hace las validaciones si el numero ingresado solo
 * contiene la unidad el retorna el numero en su forma escritapero si la unidad esta acompañada
 * de una decena es decir ejemplo (15) el hace la validacion y retorna la unidad en vacio para
 * que la funcion que valida las decenas haga el retorno de como va el numero en su forma escrita
 * pero si al contrio tiene un numero que necesita mostar su unidad en su forma escrita ejemplo: (23)
 * el retorna una concatenacion de la funcion de las decenas junto con la funcion de la unida mostrando
 * su forma escrita de esta forma "ventitres que el tres seria el valor retornado en la funcion unidad en la parte final del else*/
function conseguirCadenaDeLaUnidad(numero, esParaDecenas = false) {
  let unidad = "";
  let objetoNum = unidades.find((o) => o.numero === parseInt(numero));
  if (esParaDecenas) {
    if (objetoNum.numero === 0) {
      unidad = "";
    } else {
      unidad = objetoNum.letras;
    }
  } else {
    unidad = objetoNum.letras;
  }
  return unidad;
}
/**esta Funcion toma las decenas del numero y trabaja de la mano con las unidades para asi hacer
 * las validaciones establecidas como que si el numero que se encuentra en las decimas es mayor
 *a 3 este hace un reemplazo  en el string del objetoDecenas para mostrar su forma escrita pero
  si no ingresa en esta condicion muestra el objetoDecenas tal cual como se describio desde el inicio*/
function conseguirCadenaDeLaDecena(numeroCompleto) {
  let decena = "";

  let arrayDelNumero = numeroCompleto.split("");
  let objetoDecenas = decenas.find((o) => o.numero === parseInt(arrayDelNumero[0]))
  let objetoUnidades = parseInt(arrayDelNumero[1]);

  if (objetoUnidades === 0 && objetoDecenas.numero >= 3) {
    decena = objetoDecenas.letras.replace("y", "");
  }else {
    decena = objetoDecenas.letras;
  }
  return decena;
}
/**Esta Funcion toma el numero,verifica si se encuentra dentro de  las excepciones descritas en el objeto
 *numeroDeExcepcionDeDecenas si encuntra la coincidecncia con el objeto muestra la forma escrita de este
 *pero si no se encuentra devuelve un null y asi continuar con otra funcion de las decenas sin las excepciones*/
function excepcionesDecena(numero) {
  let decena = ''
  let objetoExcepciones = numerosDeExcepcionDeDecenas.find((o) => o.numero === parseInt(numero) )
  if (objetoExcepciones){
    decena = objetoExcepciones.letras
  }else{
    decena = null
  }
  return decena
}
/**esta Funcion toma las centenas del numero, hace las validaciones de si el numero es 100 muestar la forma escrita que esta dentro
 *de la condicion si esta no se encuentra alli es decir que ingrese en la proxima condicion esta retorna el objetoCentenas con la
 concatenacion "Cientos" ejemplo (300) la cual retornaria "tresCientos" pero si ninguna de las dos se cumple pasa a retornar que esta
 funcion no es necesaria y pasa a la funcion de las excepciones de las centenas*/
function conseguirCadenaDeLaCentena(numero, valorDecena, valorUnidad) {
    let centena =''
    if(parseInt(numero) === 1 && parseInt(valorDecena)  === 0 && parseInt(valorUnidad) === 0){
      centena = "cien"
    }else{
      centena = excepcionesDeLaCentena(numero)
      if(centena === null){
        let objetosCentenas = unidades.find((o) => o.numero === parseInt(numero))
        if (objetosCentenas){
          centena =  `${objetosCentenas.letras}cientos `
        }
      } else if (parseInt(numero) === 1) {
      }
    }
    return centena
}
/**Esta Funcion me verifica si el numero se encuentra dentro de las excepciones es decir que si cumple la
 *primer condicion de que el numero de las centenas se a = 1 esta retorna lo que se encuentra dentro del objeto
excepcionesCentena y a su vez concatena las decenas junto con  las unidades pero si esta pasa a la siguientes
condicion esta muestra el objetosExcepcionesCentenas mas la concatenacion "cientos" y en caso de no estar dentro de
estas dos condicoones retorna null para poder hacer uso de la funcion conseguirCadenaDeLaCentena */
function excepcionesDeLaCentena(numero,valorUnidad) {
  let centena = ''

  let objetoExcepcionesCentena = numerosDeExcepcionDeCentenas.find((o) => o.numero === parseInt(numero))
  if(objetoExcepcionesCentena){
    if (parseInt(numero) === 1) {
      centena = `${objetoExcepcionesCentena.letras} `
    }else{
      centena = `${objetoExcepcionesCentena.letras}cientos`
    }
  }else{
    centena = null
  }
  return centena
}
/**esta Funcion  se conviente en la funcion principal donde me reciben un numero en string luego lo parsea
 *para poder obtener su numero entero y asi  procede a evaluar el numero en que caso se encuentra si esta en la unidades,
 decenas o centenas para poder asi  llamar la funcion que me va a mostrar la forma escrita del numero pero si el usuario
 no ingresa un numero esta inmediatamente entra en la else y retorna que no es un numero mostrandole al usuario el dato
 ingresado junto con la concatenacion "no es un numero" */
function convertirNumerosALetras(numero) {
  let numeroEnLetras = "";
  let numeroEntero = 0;
  let numeroAString = "";
  let unidadAEvaluar = "";

  if (siEsUnNumero(numero)) {
    numeroEntero = parseInt(numero);
    numeroAString = numeroEntero.toString();
    unidadAEvaluar = conseguirUnidadesDecenasOCentenas(numeroAString);
    numeroEnLetras = construirCadena(numeroAString, unidadAEvaluar);
  } else {
    numeroEnLetras = `${numero} No es un numero`;
  }
  return numeroEnLetras;
}
console.log(convertirNumerosALetras(111));
