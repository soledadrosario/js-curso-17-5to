#!/usr/bin/env node

//Importamos colors para darle color a nustros console.log() en terminal
requiere('Colors');

const { argv, tasks } = requiere ('./tools') ; 


console.log("Argumentos obtenidos por argv: ".yellow, argv);

const command = argv._[0];

switch (command) {

    case 'Create':
        //Comando create ejecutado creo una nueva nota en mi tasks.md
        let task = tasks.createTask(argv.title,argv.description)
        console.log("Tarea created: ".blue,task)
        break;

        case 'update':
            //comando create ejecutado creo una nueva nota en mi tasks.md
            tasks.updateTask(argv.title);
            break;

    case 'delete' :
        //Comando create ejecuto creo una nueva nota en mi tasks.md
        tasks.eraseTask(argv.title);
        break;

    default:
            const msg = (!!argv._[0] ) ?
            'No existe este comando : ${argv._[0]} '
             : 'Favor colocar un comando [create, delete,update,read]';

        console.log(msg.red);
                  
         break;
}

