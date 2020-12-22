let raceNumber = Math.floor(Math.random() * 1000); //Esta variable determinará un número entre 1-1000 para el corredor en cuestión
let registeredEarly = false; //Esta variable verificará si el corredor se registró temprano o tarde
let runnerAge = 18; //Esta variable cubrirá la edad del corredor

if (runnerAge > 18 && registeredEarly === true){ //Determinamos que si el corredor es mayor de 18 (adulto) Y se registró temprano, entonces su número será 1000
  raceNumber = 1000;
} else if (runnerAge !== 18) { //Si la edad del corredor es distinta a 18, obtendrá un número menor a 1000
  raceNumber < 1000;
}

if (runnerAge > 18 && registeredEarly === true) { //Si el corredor es mayor de 18 Y se registró temprano, la consola imprimirá que correrá a las 9:30am
  console.log(`You will run at 9:30am according to your age and registration time, your number is ${raceNumber}.`);
} else if (runnerAge > 18 && registeredEarly === false) { //Si el corredor es mayor de 18 Y NO se registró temprano, la consola imprimirá que correrá a las 11:00am
  console.log(`You will run at 11:00am according to your age and registration time, your number is ${raceNumber}.`)
}

if (runnerAge < 18) { //Si el corredor es menor de 18, la consola imprimirá que correrá a las 12:30pm
  console.log(`You will run at 12:30pm according to your age, your number is ${raceNumber}`);
} else if (runnerAge === 18) { //Si el corredor tiene exactamente 18 años, entoncés la consola imprimirá que debe verificar la mesa de registros
  console.log('Check registration desk!')
}