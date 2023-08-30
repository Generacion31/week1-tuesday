// Tipos de DATOS => STRING

// El tipo de datos string representa cadenas de texto y debe ser entre commillas

/**
 * Podemos utilizar las siguiente comillas:
 * -simples: 'Hola'
 * -dobles: "Hola"
 * tambien podemos usar comillas invertidas : `BIENVENIDOS`
 */

// Declaraciom de una variable de tipo string
const nombre = "Jesus"
const apellido = 'Diaz'
const separador = " "

// Concatenacion de variables con el operador  +
const nombreCompleto = nombre + separador + apellido
console.log(nombreCompleto);

//Backticks o template string o template literals => ES6 (2015)
const nombreCompleto2 = `El nombre completo del usuario es: ${nombre} ${apellido}`
console.log(nombreCompleto2);

// Las cadenas son iterables, continen indice y pueden ser recorridas

const cadenaDeTexto = 'Hola cómo estan'

// H o l a   c ó m o   e  s  t  a  n
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
// todos los caracteres en un string tienen un indice, se empieza desde cero

console.log(cadenaDeTexto[0])
console.log(cadenaDeTexto[1])
console.log(cadenaDeTexto[2])
console.log(cadenaDeTexto[3])
console.log(cadenaDeTexto[4])
console.log(cadenaDeTexto[5])
