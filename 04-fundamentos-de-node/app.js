
const argv = require('yargs').argv;
const { createFile } = require('./multiply/multiplybase');

let argv2 = process.argv;
console.log(argv, argv2);
//let param = argv[2];
//let base = param.split('=')[1];

//createFile(base)
//    .then(file => console.log(`Archivo creado: ${file}`))
//    .catch(e => console.log(e));