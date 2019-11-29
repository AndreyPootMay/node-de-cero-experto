/* setTimeout(() => {
    console.log("Hola");
}, 3000); */

let getUserById = (id, callback) => {
    let user = {
        name: 'Niger',
        id
    }

    if (id === 20) {
        callback(`El usuario con el id ${id} no se encuentra en la BD`);
    } else {
        // NOTE: Al igual que con el ejemplo de la línea 25, nosotros al retornar el resultado
        // falso sin "null" solo enviaríamos el objeto y no se crearía nuestro callback
        // Se pone null para manejar el error.
        callback(null, user);
    }

}

// lo que se hace es lo siguiente, el parametro id funciona bien mientras que el parametro
// "callback" retorna una función en la cuál nosotros podemos hacer nuestras operaciones con "user"
// del ámbito de la arrow function en la línea 6;
// Sin embargo, SIEMPRE debemos de manejar los errores al principio de cada callback, en especial
// si trabajamos con consultas en la bd así sabremos si lo que ejecutamos se hizo correctamente o no.
getUserById(20, (err, user) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de la base de datos', user);
});