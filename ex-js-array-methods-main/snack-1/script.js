const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

//metodo con il ciclo for
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// Metodo con forEach
names.forEach(function(name) {
    console.log(name);
}) 

//Metodo forEach con arrow function

names.forEach(name => console.log(name));