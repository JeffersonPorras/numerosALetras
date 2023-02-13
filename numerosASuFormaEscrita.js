const unidades = [
    {numero: 0, letras: "Cero"},
    {numero: 1, letras: "Uno"},
    {numero: 2, letras: "Dos"},
    {numero: 3, letras: "Tres"},
    {numero: 4, letras: "Cuatro"},
    {numero: 5, letras: "Cinco"},
    {numero: 6, letras: "Seis"},
    {numero: 7, letras: "Siete"},
    {numero: 8, letras: "Ocho"},
    {numero: 9, letras: "Nueve"},
]
const decenas = [
    {numero: 1, letras: "Deici"},
    {numero: 2, letras: "Veinti"},
    {numero: 3, letras: "Trienta y "},
    {numero: 4, letras: "Cuarenta y "},
    {numero: 5, letras: "Cincuenta y "},
    {numero: 6, letras: "Sesenta y "},
    {numero: 7, letras: "Setenta y "},
    {numero: 8, letras: "Ochenta y "},
    {numero: 9, letras: "Noventa y "},
]
const numerosDeExcepcion = [
    {numero: 11, letras: "Once"},
    {numero: 12, letras: "Doce"},
    {numero: 13, letras: "Trece"},
    {numero: 14, letras: "Catorce"},
    {numero: 15, letras: "Quince"},
]
const centenas = [
    {numero: 100, letras: "Cien"},
    {numero: 500, letras: "Quinientos"},
]
/**
 * Esta Funcion indica si el usuario ingreso un numero o no
 */
function siEsUnNumero(numero){
    if(isNaN(numero)){
        return  false
    }else{
       return true
    }
}
/**
 * Esta Funcion no indica si numero dentro del array tiene unidades,decenas o centenas
 */
function conseguirUnidadesDecenasOCentenas(numeroEnString) {
    let valorARetornar = ""
    let arrayDelNumero = numeroEnString.split("")
    console.log(arrayDelNumero);
    switch (arrayDelNumero.length) {
        case 1:
            valorARetornar = "Unidades"
            break;
        case 2:
            valorARetornar = "Decenas"
            break;
        case 3:
            valorARetornar = "Centenas"
            break;
        default:
            break;
    }
    return valorARetornar
}


function construirCadena(numero,unidadAEvaluar) {

    let unidad = ''
    let decena = ''
    let centena = ''
    let arrayDelNumero = numero.split("")
    switch (unidadAEvaluar) {
        case "Unidades":
            let objetoNum = unidades.find(o => o.numero === parseInt(arrayDelNumero[0]))
            console.log(objetoNum);
            unidad = objetoNum.letras
            break;
        case "Decenas":
            decena = excepcionesDeLasDecenas(numero,arrayDelNumero)
           // unidad = excepcionesDeLasDecenas(numero,arrayDelNumero)
          /*   let objetoDecenas = decenas.find(o => o.numero === parseInt(arrayDelNumero[0]))
            let objetoUnidades = unidades.find(o => o.numero === parseInt(arrayDelNumero[1])) */
            
            //decena = objetoDecenas.letras
           /*
            unidad = objetoUnidades.letras */
          /*   if(objetoUnidades.numero === 0 && objetoDecenas.numero >=3){
                decena = objetoDecenas.letras.replace("y","")
                unidad = ""
            }else if(objetoUnidades.numero === 0 && objetoDecenas.numero === 1){
                decena = "Diez"
                unidad = ""
            }else if(objetoUnidades.numero === 0 && objetoDecenas.numero === 2){
                decena = "veinte"
                unidad = ""
            } */
        break;
        case "Centenas":

        break;
        default:
            break;
    }
    return `${centena}${decena}${unidad}`.toLowerCase()
}
function excepcionesDeLasDecenas(numero,valor) {
    let decena = ''
    let unidad = ''

    let arrayDelNumero = numero.split("")
    let objetoDecenas = decenas.find(o => o.numero === parseInt(arrayDelNumero[0]))
    let objetoUnidades = unidades.find(o => o.numero === parseInt(arrayDelNumero[1]))

    decena = objetoDecenas.letras
    unidad = objetoUnidades.letras
    switch (valor) {
        case (objetoDecenas.numero === 0 && objetoDecenas.numero >=3):
            decena = objetoDecenas.letras.replace("y","")
            unidad = ""
            break;
        case (objetoDecenas.numero === 0 && objetoDecenas.numero === 1):
            decena = "Diez"
            unidad = ""
            break;
        case (objetoDecenas.numero === 0 && objetoDecenas.numero === 2):
            decena = "veinte"
            unidad =""
            break;
    
        default:
            break;
    }
  /*   if(objetoDecenas.numero === 0 && objetoDecenas.numero >=3){
        decena = objetoDecenas.letras.replace("y","")
        unidad = ""
    }else if(objetoDecenas.numero === 0 && objetoDecenas.numero === 1){
        decena = "Diez"
        unidad = ""
    }else if(objetoDecenas.numero === 0 && objetoDecenas.numero === 2){
        decena = "veinte"
        unidad =""
        console.log(unidad);
    }

 */
    return `${decena}${unidad}`
}

function convertirNumerosALetras(numero) {

    let numeroEnLetras = ""
    let numeroEntero = 0
    let numeroAString = ""
    let unidadAEvaluar = ""


    if(siEsUnNumero(numero)){
        numeroEntero = parseInt(numero)
        numeroAString = numeroEntero.toString()
        unidadAEvaluar =  conseguirUnidadesDecenasOCentenas(numeroAString)
        numeroEnLetras = construirCadena(numeroAString,unidadAEvaluar)

    }else{
        numeroEnLetras = `${numero} No es un numero`;
    }
    return numeroEnLetras
}
/* console.log(convertirNumerosALetras(1));
console.log(convertirNumerosALetras("a"));
console.log(convertirNumerosALetras("0010"));
console.log(convertirNumerosALetras("10"));
console.log(convertirNumerosALetras("102"));
 */

console.log(convertirNumerosALetras(48))
console.log(convertirNumerosALetras(10))
console.log(convertirNumerosALetras(20))
