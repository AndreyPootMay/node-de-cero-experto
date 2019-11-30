const fs = require('fs');
const colors = require('colors/safe');

let listTable = (base, limit) => {
    console.log(colors.green('==========='));
    console.log(colors.green(`Tabla del ${base}`));
    console.log(colors.green('==========='));
    for (i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

let createFile = (base, limit) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        if(!Number(limit)) {
            reject(`El valor introducido ${limit} no es un número`);
            return;
        }

        let data = '';
        
        for (i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        
        fs.writeFile(`tables/table-${base}-to-${limit}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(colors.green(`table-${base}-to-${limit}.txt`))
            }
        });
    });
}

module.exports = {
    createFile,
    listTable
};