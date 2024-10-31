const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// Uso il metodo filter
// const evenNubers = nums.filter(function(num){
//     return num % 2 === 0;
// });
// console.log(evenNubers);

// Uso il metedo filter con l'arrow function
const evenNubers = nums.filter(num => num % 2 === 0);
console.log(evenNubers);
