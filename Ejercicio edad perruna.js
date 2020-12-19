const myAge = 20;
// Esta es mi edad
let earlyYears = 2;
// Esta variable se refiere a los primeros años de un perro
earlyYears *= 10.5;

let laterYears = myAge - 2;
// Con esta variable comenzamos a realizar el cálculo de mi edad, sustrayendo los valores que ya conocemos de la edad de los perros
laterYears *= 4;
// En esta línea realizamos el cálculo de los años que tengo sin tomar en cuenta los primeros dos años que ya cálculamos en edad perruna

let myAgeInDogYears = earlyYears + laterYears;
// En esta variable declaro el valor de mi edad en años perrunos, tomando en cuenta los cálculos que realizamos anteriormente para los primeros dos años y los años restantes

const myName = 'Isaac'.toLowerCase();
// Usamos el método para hacer que mi nombre se almacene en minúsculas


console.log(`My name is ${myName}. I am ${myAge} years old in human years wich is ${myAgeInDogYears} years old in dog years.`);
// Este es el método log que usamos para imprimir la información en la consola, usamos la concatenación de strings para usar los valores de las variables de una manera más clara y práctica