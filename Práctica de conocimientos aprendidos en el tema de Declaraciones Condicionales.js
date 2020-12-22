let highSchoolSubjects = [ 'chemistry' , 'history' , 'math' , 'physics' , 'sports']; //Una variable con un array que contiene una lista de materias

switch (highSchoolSubjects[Math.floor(Math.random() * 4)]) //Abrimos la declaración swtich con un método Math para mostrar una materia al azar y probar los casos a continuación {
  case 'chemistry' :
  console.log('You got a 9 at chemistry!');
  break;
  case 'history' :
  console.log('You got a 6 at history, better luck next time, pal :/');
  break;
  case 'math' :
  console.log('You got a 10 at math!!! Excellent, keep going!');
  break;
  case 'physics' :
  console.log('You got a 4 at physics, you better start studying for the extraordinary exam');
  break;
  case 'sports' :
  console.log('You got a 10 at sports, cool!');
  break;
  default: console.log('Not a valid subject');
  break;
}