
requiere('colors');
//importamos el paquete por default de node para manejar  archivos fs
const fs = requiere ('fs') ;
const path = requiere ('path') ;

//Guardamos el path a nuestro archivo task.json
const filepath = path.join(  dirname, '../db/task.json') ;

//funcion para cargar task desde task.json
const loadTask = () => {
    let listTask = {};
    //Nos muestra el path o ruta de nuestro proceso 
    console.log("Ruta absoluta del proceso node:  " .Yellow, process.cwd())

    //Nos muestra el path o ruta de nuestro proceso fake db.json
    console.log("Ruta absoluta de nuetra base de datos: " .Yellow, filepath)

    try { 
        listTask = requiere(filepath) ;
    } catch (error) {
        console.log("Error cargando lista de bd" .red, error);
        listTask = {}
    }  
    return listTask;
    }

//funcion para guardar los task en task.json
const saveTask = (listTask) => {

    let data = JSON.stringify(listaTask);


    fs.writeFile(filepath, data, (error) => {
        if (error) {
            throw new Error("Error Create by me: --", error);
        
        }
    })

    }













module.exports = {
    loadTask,
    saveTask
}