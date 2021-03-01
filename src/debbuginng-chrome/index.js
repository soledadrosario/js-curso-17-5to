//creamos una funcion llamada repetir

function repetir(nombre,veces ) {

     /**
      * 
      * imprimimos nombre el numero de vcs que indique veces
      * estos son unos comentaraios especiales para indicar
      * a otros programadores que hace nuestra funcion
      * @author Soledad Rosario
      * @version 0.1.0
      * @param {string} nombre
      * @param {Number} veces
      * @return {none}
      * 
      
      */
     
       
      //creamos un ciclo for

      for (let index = 1; index <= veces; index++) {

        // la variable index se va incrementando en 1
        // hasta que inedex < veces deje de ser cierto.
        // mientras vamos agregando elementos p con el nombre
        // a nuestro documento html.

        let element = document.createElement('p');

        element.innerText = (nombre);

        document.body.appendChild(element);


      }

        
        }

      const nom = prompt ('escribe tu nombre' );
      const vcs = parseInt(prompt("Escribe la vsc que lo mostraras"));

      repetir(nom, vcs)
        
