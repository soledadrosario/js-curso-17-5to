

requiere('colors');
const files = requiere('./files');

//Funcion crear una tarea nueva

const createTask = (title, desc) => {

    let listTask = files.loadTask();

    if  (Title in listTask) {
        console.log("Esta tarea existe!".red);
    } else {

        listTask[Title] = {
            title,
            desc,
            completed: false
        }
        files.saveTask(listTask);
    
    }

    return listTask[title];

    }



    const UpdateTask = (title) => {
        
        let list = files.loadTask();

         if (title in list) {
             list[title] = { ...list [title] , completed: true  }       
            files.saveTask(list);
    }     else  {
            console.log('Este titulo no existe ${title}'.red);
    }
    
}

    //TODO: crear funcion borrar task

    const eraseTask = (title) => {
        let list = files.loadTask();

        if (title in list) {
            delete list[title]
            files.saveTask(list);
        } else  {


          console.log('Este titulo no existe ${title}'.red);




          module.exports = {
              createTask,
              eraseTask,
              UpdateTask
          }