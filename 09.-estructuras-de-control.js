// if ... else if ... else

// const sampleData = 80;

// if (sampleData > 50) {
//     console.log('sampleData is over 50!');
// }

// if (sampleData > 50) {
//     console.log('sampleData is over 50!');
// } else {
//     console.log('sampleData is below 50!');
// }

// if (sampleData < 20) {
//     console.log('sampleData is below 20!');
// } else if (sampleData >= 20 && sampleData <= 50) {
//     console.log('sampleData is between 10 and 50!');
// } else {
//     console.log('sampleData is over 50!');
// }


// EJERCICIOS

const oneToHundredArray = Array.from({length: 100}, (_, i) => i + 1)

// 1. Crea una función printOdds que reciba los primeros 100 números
// enteros e imprima en la consola los números impares

// 2. Crea una función detectPairs que reciba los primeros 100 números
// enteros e imprima en la consola 'par' cuando
// reciba un número par e 'impar' cuando reciba un impar

// 3. FizzBuzz: crea una function fizzBuzz que reciba los primeros 100
// números enteros e imprima en la consola:
// - Fizz si es múltiplo de 3
// - Buzz si es múltiplo de 5
// - FizzBuzz si es múltiplo de 3 y de 5
// - El número recibido en otro caso

// switch - break - default

// EJERCICIO

// 1. Repetir el FizzBuzz

// for - continue

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// EJERCICIOS

// 1. Crea un contador que imprima en pantalla
// los números naturales del 1 al 100

// 2. Crea un contador que imprima en pantalla
// los números naturales impares del 1 al 100

// 3. Modifica tu anterior contador para que
// imprima los números naturales impares del
// 100 al 1

// for in

// const sampleObject = { a: 1, b: 2, c: 3 };

// for (const property in sampleObject) {
//   console.log(property);
// }

// EJERCICIO

// 1. Itera sobre oneToHundredArray para imprimir en
// pantalla una cuenta de 2 en 2 desde 2 hasta 200

// 2. Ahora crea un FizzBuzz

// for of

// for (const number of oneToHundredArray) {
//     console.log(number);
// }

// EJERCICIO

// 1. Imprime todas las propiedades y valores de
// sampleObject. Ejemplo: "Propiedad a: valor 1, ..."

// while
// do while

// let currentNumber = 0;

// while (currentNumber < 100) {
//   currentNumber++;
// }

// console.log(currentNumber);

// let currentNumber = 0;

// do {
//     console.log(currentNumber);
//     currentNumber++;
// } while (currentNumber < 0);