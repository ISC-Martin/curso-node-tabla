const colors = require('colors');
const { log } = require('console');
const { writeFile } = require('fs/promises');

const crearArchivo = async ( base = 5, listar = false, hasta = 10) => {
  try {
    
    let salida = '';
    let consola = '';
    for(let i = 1; i <= hasta; i += 1) {
      salida += `${ base } x ${ i } = ${ base * i }\n`;
      consola += `${ colors.blue(base) } ${colors.red('x')} ${ i } ${colors.red('=')} ${ colors.green(`${ base * i }`)}\n`;
    }
    
    if (listar) {
      log('============================='.yellow);
      log('        Tabla del: '.yellow, colors.blue(base));
      log('============================='.yellow);
      log(consola)
    }
    await writeFile(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearArchivo
}