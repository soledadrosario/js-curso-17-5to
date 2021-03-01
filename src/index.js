const saludar = (nombre)=> {
    // Soledad Rosario 17-5b
    console.log ('creando etiqueta h1,en el HTML!');
                                            

      //comentario de una sola linea
      //el codigo comentado no lee el interprete de js.
       
      /*
          
           comentario de varias lienas
           uso basico del DOCUMENTO OBJECT MODEL (DOM)
           Permite a JS modificar el HTML.
      */
     
      const h1 = document.createElement('h1');
      h1.innerText = `Hola,  ${nombre}`;

      document.body.append(h1);

}

const user = "Soledad";

saludar(user);
