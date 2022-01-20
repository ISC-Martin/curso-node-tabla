const colors = require('colors');
const { log } = require('console');
console.clear();

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => log(colors.cyan(nombreArchivo), 'creado'))
  .catch(err => log(err));
