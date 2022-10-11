//arreglo Inicial
var arreglo = {b:'Apple', c:'Microsoft', a:'Google'};
//Mostramos el arreglo
console.log('keys y values: ')
console.log(arreglo);
//funcion 
function keysValues (array){
  //Ordenamos el objeto por keys
  var arreglOrdenado =Object.keys(array).sort().reduce(
    (obj, key) => { 
      obj[key] = array[key]; 
        return obj;}, 
    {});
  //retornamos keys y values
  return {
      keys : Object.keys(arreglOrdenado),
      values : Object.values(arreglOrdenado),
  };  
}
//llamamos a la funcion
  var objetos = keysValues(arreglo);
  console.log(objetos.keys)
  console.log(objetos.values)