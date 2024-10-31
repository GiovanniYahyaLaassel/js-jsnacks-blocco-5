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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// Uso il metodo find per trovare lo studente 2
//  const studentId2 = students.find(function(student){
//     return student.id === 2;
//  })
//  console.log(studentId2);

//  Utilizzo il metodo find con l'arrow function

const studentId2 = students.find(student => student.id === 2);
console.log(studentId2);