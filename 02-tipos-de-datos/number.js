//TIPOS DE DATOS => #NUMBER

//El tipo de dato number representa numeros enteros y tambien de punto flotante

//Numeros enteros
10
20
30
4
5

//Numeros de puntos flotante

10.45
1.5
6.3

// Declaracion de una variable numerica
const entero = 10 // number
const decimal = 10.5
console.log(entero); //print amarillo

// Tambien podemos decalarar numeros negativos

const enteroNegativo = -10
const decimalNegativo = -10.5

const numeroEnCadena = '10' //string
console.log(numeroEnCadena);//print blanco

// typeOf para validar el tipo de dato
console.log(typeof (entero));// number
console.log(typeof (numeroEnCadena)); //string


// convertir una cadena a numero, se utiliza la funcion parseInt()
const numeroEnCadenaParseado = parseInt(numeroEnCadena) //number
console.log(numeroEnCadenaParseado); //Deberia salir en color amarillo
console.log(typeof (numeroEnCadenaParseado)); //number


// convertir una cadena decimal a numero, se utiliza la funcion parseFloat()
const numeroDecimalEnCadenaParseado = parseFloat('10.5')
console.log(numeroDecimalEnCadenaParseado);

// valores especiales -> Infinito
const numeroInfinito = Infinity
console.log(numeroInfinito);

const numeroInfinitoNegativo = -Infinity
console.log(numeroInfinitoNegativo);

console.log(1 / 0); //Infinity