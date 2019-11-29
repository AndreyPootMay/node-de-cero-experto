/**
 * Async-await
 */

/*let getName = async() => {
    undefined.name;
    return 'Andrey';
};

getName().then(name => {
    console.log(name);
}).catch(e => {
    console.log('Error de async', e);
})*/

let getName = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Andrey');
        }, 3000);
    });
};

getName().then(name => {
    console.log(name);
}).catch(e => {
    console.log('Error de async', e);
});

let greeting = async() => {
    let name = await getName();

    return `Hola ${name}`;
};

greeting().then(msg => {
    console.log(msg);
}).catch(e => {
    console.log('Error de async en saludo', e);
})