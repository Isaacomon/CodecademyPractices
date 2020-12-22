let userName = ''; //Esta variable será llenada con el numbre del usuario

userName ? console.log(`Hello, ${userName}!`) //Aquí elegimos si dar un saludo personalizado, o no hacerlo si el usuario decidió no escribir su nombre
: console.log('Hello!')

let userQuestion = ''; //Esta variable será llenada con la pregunta que el usuario tenga para la Bola Mágica

console.log(`${userQuestion}, right, ${userName}?`); //Aquí imprimiremos la pregunta y el nombre del usuario como confirmación para el usario

let randomNumber = Math.floor(Math.random() * 8); //Asignamos una variable que elegirá un valor distinto entre 1-8 cada vez que se haga una pregunta
let eightBall = ''; //Esta variabla será llenada con preguntas que se asignarán dependiendo del número que obtenga la variable randomNumber

switch (randomNumber) { //Aquí asignamos una pregunta a eightBall por cada posible valor de la variable randomNumber
  case 1 :
  eightBall = 'It is certain';
  break;
  case 2 :
  eightBall = 'It is decidedly so';
  break;
  case 3 :
  eightBall = 'Reply hazy try again';
  break;
  case 4 :
  eightBall = 'Cannot predict now';
  break;
  case 5 :
  eightBall = 'Do not count on it';
  break;
  case 6 :
  eightBall = 'My sources say no';
  break;
  case 7 :
  eightBall = 'Outlook not so good';
  break;
  case 8 :
  eightBall = 'Signs point to yes';
  break;
}

console.log(eightBall); //Imprimimos la respuesta de la Bola Mágica, y ya que el valor de eightBall depende del valor de randomNumber, la respuesta será distinta cada vez