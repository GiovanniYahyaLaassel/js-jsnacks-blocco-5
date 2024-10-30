const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// Ciclo for 
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

// Metodo forEach

people.forEach(function(person){
  console.log(person.name);
})

// Metodo abbreviato con arrow function

people.forEach(person => console.log(person.name));