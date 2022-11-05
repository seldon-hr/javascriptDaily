const banda = {
    id: 1,
    nombre: 'Radiohead', 'tipo de musica': 'Rock',
    albunes: ['Pablo Honey', 'Ok Computer', 'In RainBows'],
};

console.log(banda['nom' + 'bre']);

/* 
    En JavaScript hay dos maneras de acceder a las propiedades de un objeto, con la notación de punto y con la notación de corchetes.

Usamos la notación de punto cuando conocemos el nombre literal de la propiedad a la que queremos acceder. La key a la que accedemos con esta notación debe ser un nombre de variable válido.

La notación de corchetes se diferencia en que todo lo que este dentro de los corchetes debe ser un string y es evaluado por JavaScript como una expresión.

Por este motivo, cuando hacemos console.log(banda["nom"+"bre"]) el lenguaje evalua los corchetes concatenando las cadenas de texto y mostramos por consola Radiohead.
*/