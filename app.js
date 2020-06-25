const argv = require('./config/yargs').argv;
var colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./lib/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then((msj) => {
            console.log(`Archivo creado:`, colors.green(msj));
        }, (msj) => console.log(msj));
        break;

    default:

        break;

}

/* let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);
*/