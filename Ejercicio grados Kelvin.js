/* La variable kelvin se estableció en 293, ya que es "el clima de hoy"*/
const kelvin = 0;
/* La variable celcius tiene un valor que depende la variasble kelvin, haciendo el cálculo que necesita para mantener la relación entre ellas y sus valores reales */
let celsius = kelvin - 273;
/* En esta variable, convertimos de celcius a fahrenheit haciendo el cálculo correspondiente para manener la relación entre ellas y sus valores reales */
let fahrenheit = celsius * (9/5) + 32;
/* Aquí redondeamos el número guardado en fahrenheit para evitar los valores decimales en el cálculo*/
fahrenheit = Math.floor(fahrenheit);

//console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperture is ${newton} deegrees.`)