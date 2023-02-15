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
  { numero: 11, letras: "Once" },
  { numero: 12, letras: "Doce" },
  { numero: 13, letras: "Trece" },
  { numero: 14, letras: "Catorce" },
  { numero: 15, letras: "Quince" },
];
const numerosDeExcepcionDeCentenas = [
  { numero: 1, letras: "Ciento " },
  { numero: 5, letras: "Quinientos " },
];
/**
 * Esta Funcion indica si el usuario ingreso un numero o no
 */
function siEsUnNumero(numero) {
  if (isNaN(numero)) {
    return false;
  } else {
    return true;
  }
}
/**
 * Esta Funcion no indica si numero dentro del array tiene unidades,decenas o centenas
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
/**esta Funcion me une las unidades decenas y centenas en letras */
function construirCadena(numero, unidadAEvaluar) {
  let unidad = "";
  let decena = "";
  let centena = "";
  let arrayDelNumero = numero.split("");
  switch (unidadAEvaluar) {
    case "Unidades":
      unidad = conseguirCadenaDeLaUnidad(arrayDelNumero[0])
            break;
    case "Decenas":
      decena = conseguirCadenaDeLaDecena(arrayDelNumero[0]);
      unidad = conseguirCadenaDeLaUnidad(arrayDelNumero[1], true);
      break;
    case "Centenas":
        let FragmentoDecena = arrayDelNumero[1]+arrayDelNumero[2]
        console.log(FragmentoDecena)
        centena = conseguirCadenaDeLaCentena()
        decena = conseguirCadenaDeLaDecena(FragmentoDecena);
        unidad = conseguirCadenaDeLaUnidad(arrayDelNumero[2], true);

      break;
    default:
      break;
  }
  return `${centena}${decena}${unidad}`.toLowerCase();
}

/**esta Funcion muestra la unidades en letras */
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
/**esta Funcion muestra las decenas en letras */
function conseguirCadenaDeLaDecena(numeroCompleto) {
  let decena = "";

  let arrayDelNumero = numeroCompleto.split("");
  let objetoDecenas = decenas.find((o) => o.numero === parseInt(arrayDelNumero[0]))
  let objetoExcepciones = numerosDeExcepcionDeDecenas.find((o) => o.numero === parseInt(arrayDelNumero[0]+arrayDelNumero[1]))
  let objetoUnidades = parseInt(arrayDelNumero[1]);

  if (objetoUnidades === 0 && objetoDecenas.numero >= 3) {
    decena = objetoDecenas.letras.replace("y", "");
  } else if (objetoUnidades === 0 && objetoDecenas.numero === 1) {
    decena = "Diez";
  } else if (objetoUnidades === 0 && objetoDecenas.numero === 2) {
    decena = "veinte";
  }else if (objetoUnidades >= 1 && objetoUnidades <= 5 && objetoDecenas.numero === 1){
    decena = objetoExcepciones.letras
  }
  else {
    decena = objetoDecenas.letras;
  }
  return decena;
}

/**esta Funcion muetra las centenas en letras */
function conseguirCadenaDeLaCentena(numero) {
    let centena =''


}
/**esta Funcion convierte el numero dado a letras */
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
/* console.log(convertirNumerosALetras(1));
console.log(convertirNumerosALetras("a"));
console.log(convertirNumerosALetras("0010"));
console.log(convertirNumerosALetras("10"));
console.log(convertirNumerosALetras("102"));
console.log(convertirNumerosALetras(48));
console.log(convertirNumerosALetras(15));
console.log(convertirNumerosALetras(20)); */
console.log(convertirNumerosALetras(11));
