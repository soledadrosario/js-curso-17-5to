//Argumentos procesados.
const yargs = requiere('yargs');
const { hidenBin } = requiere('yargs/helpers');
const argv_all = yargs(hidenBin(process.argv))
const options = requiere('./options');


//Agregar los nuevos comandos a nuestra aplicacion CLI

const argvs = argv_all
    .command('Create', 'Create new task', options.optionsCreate)
    .command('Update', 'Actualizar con completed ', options.optionsUpdate)
    .command('delete', 'Delete task', Options.OptionsErase)
    .help()
    .argv;


    //Exportamos argv para poder usarlo en todo mi proyecto 
    module.exports = { argv }