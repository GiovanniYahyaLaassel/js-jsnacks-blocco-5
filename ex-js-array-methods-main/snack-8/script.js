const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// Uso il metodo find per trovare la classe di Marco

// const marcoClass = students.find(function(student){
//    return student.name === 'Marco Lanci';
// }).class;

// console.log(marcoClass);

// Utilizzo l'arrow function

const marcoClass = students.find(student => student.name === 'Marco Lanci').class;
console.log(marcoClass);


