const fs = require('fs');
const { rejects } = require('assert');
let data = '';
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, project) => {
        for (i = 0; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base*i}`.green);
        }
    })

}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`'${base}' no es un numero`);
            return;
        }
        for (let i = 0; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFile(`multiplicacion/tabla del ${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}`);
        });

    })
}
module.exports = {
    crearArchivo,
    listarTabla
};