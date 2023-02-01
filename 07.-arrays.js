// ARRAYS
// Las arrays son listas, donde podemos almacenar cualquier tipo de dato.

const thisIsAnArray = [
    1,
    'perrete',
    [1, 2, 3, 4, 5],
    false,
    {
        name: 'Zarigüeya',
        animal: 'cat',
        age: 2.5
    }
];

// console.log(thisIsAnArray);

// Las arrays tienen una propiedad length, como las strings,
// que nos permite conocer su longitud

// console.log(thisIsAnArray.length);

// Además, podemos acceder a cada uno de sus índices con
// corchetes: RECORDAD! EL PRIMER ÍNDICE SIEMPRE ES 0!

// console.log(thisIsAnArray[0]);
// console.log(thisIsAnArray[2]);
// console.log(thisIsAnArray[thisIsAnArray.length - 1]);

// Podemos utilizar el spread operator para hacer copias
// de una array

// const thisIsAnotherArray = [...thisIsAnArray];

// console.log(thisIsAnotherArray)

// Las arrays son pointers a un lugar de la memoria

// const arrayExampleOne = [1, 2, 3, 4];
// const ourSecondExampleArray = arrayExampleOne;

// arrayExampleOne[0] = "Did you expect this?";

// console.log(arrayExampleOne);
// console.log(ourSecondExampleArray);

// Para evitar modificar las arrays originales podemos
// hacer copias

// const arrayExampleOne = [1, 2, 3, 4];
// const ourSecondExampleArray = [...arrayExampleOne];

// arrayExampleOne[0] = "Did you expect this?";

// console.log(arrayExampleOne);
// console.log(ourSecondExampleArray);

// Podemos iterar en una array gracias a su método forEach

// const forEachExampleArray = ['one', 'two', 'three'];

// forEachExampleArray.forEach(word => {
//     console.log(word);
// })

// EJERCICIOS

const exercisesArray = ['one', 'two', 'three', 4, 5, 6, [7, 8, 9, 'ten']];

// 1. Imprime en el terminal la longitud de exercisesArray

// 2. Imprime en el terminal el primer elemento de exercisesArray

// 3. Imprime en el terminal el elemento 'two' dentro de exercisesArray

// 4. Imprime en el terminal el array almacenado dentro de exercisesArray

// 5. Imprime en el terminal la longitud del array almacenado dentro de exercisesArray

// 6. Haz una copia de exercisesArray

// 7. Cambia el primer índice de exercisesArray por el valor numérico 1

// 8. Utiliza la función printOnlyStrings para imprimir en consola
// todas las strings almacenadas en exercisesArray

const printOnlyStrings = input => {
    if (typeof input === 'string') {
        console.log(input);
    }
}

// MÉTODOS

// 0. Determina si exampleArrayToCheck es un array

const exampleArrayToCheck = { one: 'two' };

// 1. Une las arrays mergeOne y mergeTwo en una única array

const mergeOne = ['one', 'two', 'three'];
const mergeTwo = [1, 2, 3];

// 2. Crea una función isLegalAge para determinar si el parámetro
// proporcionado es mayor que 18


// 3. Utiliza la función isLegalAge para determinar si todos
// los elementos de la array cumplen la condición.
// NOTA: Queremos obtener un true/false

const ageArray = [19, 38, 92, 84, 28, 71, 39, 44, 29, 91, 45, 32, 19, 63, 32, 33, 45, 18, 47, 54, 19, 46, 75, 51, 23, 34, 81, 108, 72, 26, 28, 24, 41, 51, 52, 75, 41, 51, 64, 81, 26];

// 4. Crea una función isOverFifty para determinar si el parámetro
// proporcionado es mayor que 50

// 5. Utiliza la función isOverFifty para encontrar las edades
// superiores a 50

const petsArray = ['dog', 'cat', 'goldfish', 'horse', 'cow', 'goat', 'python', 'parrot', 'ferret',  'hamster', 'pigeon', 'pig', 'rabbit',  'chicken', 'turtle', 'gorilla'];

// 6. ¿Puedes encontrar la palabra 'gorilla' en petsArray?

// 7. ¿Si existe, puedes encontrar el índice de 'gorilla' en petsArray?

// 8. Si existe, elimina la palabra 'gorilla' de petsArray

// 9. Imprime en la terminal la nueva lista de mascotas,
// separadas por una coma y un espacio. Ejemplo: "perro, gato, periquito... "

// 10. Vuelve a imprimir la ista, pero ahora en orden inverso

// 11. ¿Alguna de las mascotas tiene más de tres letras?

// 12. Ordena alfabéticamente la lista de mascotas

// 13. Añade un signo de exclamación al final del
// nombre de cada mascota

// 14. Elimina la última mascota de la lista, guarda su
// nombre en una variable e imprímela en la terminal

// 15. Ahora introduce ese nombre al principio del array

// 16. Elimínalo de nuevo del principio del array,
// guardándolo en una nueva variable

// 17. Ahora introdúcelo al final del array

// 19. Imprime por pantalla los primeros 5 animales de la lista

// 20. Completa la lista añadiendo 'Feb' en la segunda posición

const months = ['Jan', 'March', 'April', 'June'];
