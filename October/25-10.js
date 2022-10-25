const colorCofig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
};


const colors = ['pink', 'red', 'blue'];
console.log(colorCofig.colors[1]);

//Output TypeError 

/* 
    En javascript existen 2 maneras de aceder a las propiedades de los objetos, por notación de corchetes.

    Cuando hacemos colorConfig.colors[1] literalmente estamos buascando una propiedad color en el objeto
    colorCofing y como no exist esta propiedad entonces obtenemos un undefined, entonces ahora javascript
    intentara hacer undefined[1] y esto no es un código válido, por ello la consola muestra un TypeErro.

    Cuando queremos usar variables para hacer lo que se denomina accesos a propiedades dinámicas de objetos
    necesitamos usar la notación de corchetes: colorConfig[colors[1]] que nos devolverá true, el valor de la
    propiedad red del objeto colorConfig.
*/