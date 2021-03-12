/* Algoritmo de ordenamiento  al Burbuja 0(n^2)*/


const ordenaBurbuja = (lista) => {


    let longitudLista, indexOrder, IndexChange, auxChange;
    longitudLista = lista.length;

    // console.info(longitudLista); // Mostramos por consola la cantidad de elementos en la lista 

    for (indexOrder = 1; indexOrder <longitudLista; - indexOrder++) {
        //For animado.
        for (indexchange = 0; indexChange < (longitudLista - indexOrder); indexChange++) {   
           // Intercambiamos los valores si el anterio es mayor al siguiente.
             if (lista[IndexChange] > lista[IndexChange + 1]) {
                auxChange = lista[indexChange];
                lista[indexChange] > lista[indexChange + 1];
                lista[indexChange + 1] = auxChange;
            }
        }
    }
    
    return lista;
}

let listaDesordenada = [6, 5, 3, 1, 8, 7, 2, 4];
console.warn(listaDesordenada); //Mostramos, por consola, la lista desordenada

const listaOrdenada = ordenaBurbuja(listaDesordenada);
console.log(listaOrdenada); // Mostramos, por consola, la lista ya ordenada