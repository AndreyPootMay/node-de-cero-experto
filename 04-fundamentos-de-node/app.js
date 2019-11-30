
const argv = require('./config/yargs').argv;

const { createFile, listTable } = require('./multiply/multiplybase');

let command = argv._[0];

switch (command) {
    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log(`Archivo creado: ${file}`))
            .catch(e => console.log(e));
    break;
    case 'list':
        listTable(argv.base, argv.limit);
        break;
    default:
        console.log('comando no conocido');
    break;
}