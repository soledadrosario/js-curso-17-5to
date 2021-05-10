### Lab 8.2 Creacion organizacion del proyecto
*  [ ] Crear el archivo **node-CLI/app.js**
   * [ ] Hacemos **git add .**
   * [ ] Hacemos **git commit -am "Crea app.js"**
   * [ ] Hacemos **git push**
*  [ ] Crear directorio **node-CLI/tools** con 
   * [ ] Crear **node-CLI/tools/index.js**
   * [ ] Crear **node-CLI/tools/argvs.js**
   * [ ] Crear **node-CLI/tools/files.js**
   * [ ] Crear **node-CLI/tools/task.js**
   * [ ] Crear **node-CLI/tools/options.js**
*  [ ]  Crear directorio **node-CLI/db** con
   * [ ] Crear **node-CLI/task.json**
   * [ ] Hacemos **git add .**
   * [ ] Hacemos **git commit -am "Crea tools settings"**
   * [ ] Hacemos **git push**





   ## Lab 8.3 TRABAJANDO CON FICHEROS CON NODE
    Empezamos a trabajar con file.js
        Importamos paquetes path y colors
    
    Usamos paquetes importados en nuestro codigo con la funcion loadTask
        Exportamos nuestra funcion loadTask()
        Pruebas de loadTask
        Hacemos git add.
        Hacemos git commit -am "Crea funcion loadTask()"
        Hacemos git push

    Usamos paquetes importadosen nuestro codigo con la funcion saveTask()
        Exportamos nuestra funcion saveTask
        Pruebas de saveTask
        Hacemos git add.
        Hacemos git commit -am "Crea funcion saveTask()"
        Hacemos git push



### Lab 8.4 trabajando con opciones de yargs.
* [ ] Empezamos a trabajar con *opcions.js*
  * [ ] Creamos los objetos para nuestros comandos:
        * description
        * title
        * completed
        * erased
  * [ ] Creamos las opciones para nuestros comandos:
        * opcionsCreate
        * opcionsUpdate
        * opcionsErase
  * [ ] Exportamos nuestras opciones
  * [ ] Hacemos *git add.*
  * [ ] Hacemos *git commit -am "Configura argvs con opciones para los comandos"*
  * [ ] Hacemos *git push*



  ### Lab 8.5 Trabajamos en funciones para los tasks o tareas.
   
    * [ ] Empezamos a trabajar con tasks.js
        * [ ] Creamos funnciones para trabajar los tasks: *createTask*updateTask*eraseTask
        * [ ] Exportamos nuestars funciones.
        * [ ] Hacemos git add .
        * [ ] Hacemos git commit -am "Configura argvs con opciones para los comandos"
        * [ ] Hacemos git push


        ### Lab 8.6 Trabajamos con la configuracion de Yargs.
  * [ ] Empezamos a trabajar con el fichero argvs.js

     * [ ] Agregando los comandos que usara Yargs
     * [ ] Exporto el objeto argv para nuestro proyecto.
  
  * [ ] Empezamos a trabajar con index.js
    * [ ] Importamos y exportamos nuestras herramientas.

  * [ ] Hacemos git add .
  * [ ] Hacemos git commit -am "Exportar tools components"
  * [ ] Hacemos git push

### Lab 8.7 Trabajamos con nuestra aplicacion principal

* [ ] Empezamos a trabajar con el fichero *app.js*
* [ ] Importamos las herramientas tasks argv y el paquete colors
  * [ ] Usamos estructura switch
    * [ ] Filtramos los comandos create update delete
* [ ] Hacemos *git add .*
* [ ] Hacemos *git commit -am "Finaliza proyecto-pruebas de funcionamiento"*
* [ ] Hacemos *git push*