//COERCION DE TIPOS

// En js, la coercion es una caracteristica que fuerza a que distintas variables de distintos tipos se comporten de diferentes contextos.

// Dos tipos: IMPLICTA - EXPLITA

//COERCION DE TIPO IMPLICITA
console.log('1' - 5); // 15
console.log('24' / '2'); //12
console.log('15' - '5');
console.log('2' * '10');

console.log('dos' * 2); // Nan not a number

//COERCION DE TIPO EXPLICITA
console.log(1 + 2);
console.log(String(1) + String(2));

console.log('2' + '4');
console.log(parseInt('2') + Number('4'));