let name = 'Deadpool';
let real = 'Wade Winstone';

//Imprimiendo
//console.log(name + ' ' + real);
//console.log(`${name} ${real}`);

// Caso 2: comprobando si son lo mismo;
//let fullName = name + ' ' + real;
//let fullNameTemplate = `${name} ${real}`;
//console.log(fullName === fullNameTemplate);

// Caso 3: Imprimiendo funciones en template strings
function getName() {
    return `${name} ${real}`;
}

console.log(`El nombre de: ${ getName() }`);