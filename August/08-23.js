const nombre = 'Salamandro';
console.log(nombre.split(''));
console.log([...nombre]);
console.log(Array.from(nombre));

/* 
Respuesta Correcta: A) Los 3 imprimen: ["A","l","e","j","a","n","d","r","o"]
split es un String Method que se encarga de convertir una cadena en arreglo, donde cada item del arreglo lo determina el separador que recibe split como parámetro. Como le pasamos una cadena vacía entonces Alejandro se convierte en ["A","l","e","j","a","n","d","r","o"].

Spread Operator (...) expandirá o propagará la cadena Alejandro en ["A","l","e","j","a","n","d","r","o"]. El Spread Operator no solo funciona con arreglos, también puede ser usado con cadenas.

Array.from es desde ES6 una manera más de convertir cadenas a arreglos, tambiém regresa ["A","l","e","j","a","n","d","r","o"].
*/