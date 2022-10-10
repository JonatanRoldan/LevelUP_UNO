//arreglo Inicial
var arreglo = {b:1, a:2, c:3, e:4};
//Mostramos el arreglo
console.log('keys y values: ')
console.log(JSON.stringify(arreglo));
//llamamos a la funcion
keysValues(arreglo);
//
function keysValues (array){
  //Ordenamos el objeto por keys
  var arreglOrdenado =Object.keys(array).sort().reduce(
    (obj, key) => { 
      obj[key] = array[key]; 
        return obj;}, 
    {});
  //Mostramos arreglo ordenado
  console.log('keys y values Ordenados: ')
  console.log(JSON.stringify(arreglOrdenado));
  //Mostramos Solo las Keys
  console.log('Arreglo de Keys: ')
  console.log(Object.keys(arreglOrdenado));
  //Mostramos Solo los valores
  console.log('Arreglo de Values: ')
  console.log(Object.entries(array))
}