const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        demand:true,
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('list', 'Imprime en consola la lista de iteraciones en una tabla', options)
    .command('create', 'Crea en el directorio "tables/" la lista de iteraciones en una archivo', options)
.help().argv;

module.exports = {
    argv
}