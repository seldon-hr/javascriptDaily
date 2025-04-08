/* 
    A continuación, tenemos dos cuestiones, en demostrar el tiempo que sería más sencillo
    para iterar y buscar objetos que se encuentran en dos listas.
     El problema es el siguiente:
     Tengo dos listas, la primera incluye información sobre una lista de científicos
     la segunda incluye aquellos username de otros científicos.
     Aquí es necesario encontrar el que científicos se encuetran en ambas listas
     y mostrar su infomación.
*/


const scientificAuthors = [
    {
        name: "Stephen Hawking",
        username: "stephenhawking",
        birthYear: 1942,
        deathYear: 2018,
        notableWorks: ["A Brief History of Time", "The Universe in a Nutshell"],
        field: "Theoretical Physics",
        awards: ["Presidential Medal of Freedom", "Copley Medal"]
    },
    {
        name: "Carl Sagan",
        username: "carlsagan",
        birthYear: 1934,
        deathYear: 1996,
        notableWorks: ["Cosmos", "Pale Blue Dot"],
        field: "Astronomy",
        awards: ["Pulitzer Prize", "NASA Distinguished Public Service Medal"]
    },
    {
        name: "Jane Goodall",
        username: "janegoodall",
        birthYear: 1934,
        notableWorks: ["In the Shadow of Man", "The Chimpanzees of Gombe"],
        field: "Primatology",
        awards: ["Dame Commander of the Order of the British Empire", "Kyoto Prize"]
    },
    {
        name: "Richard Dawkins",
        username: "richarddawkins",
        birthYear: 1941,
        notableWorks: ["The Selfish Gene", "The God Delusion"],
        field: "Evolutionary Biology",
        awards: ["Royal Society of Literature Award", "Cosmos International Prize"]
    },
    {
        name: "Neil deGrasse Tyson",
        username: "neildegrassetyson",
        birthYear: 1958,
        notableWorks: ["Astrophysics for People in a Hurry", "Death by Black Hole"],
        field: "Astrophysics",
        awards: ["NASA Distinguished Public Service Medal", "Public Welfare Medal"]
    }
];

const usernames = [
    'juanarsuaga',
    'carlsagan',
    'yuvalNoah',
    'richarddawkins',
    'stevebrussatte'
];

/* Para esto vamos a usar dos formas, mapas y listas. */



// [x]: LISTAS

function findAuthorsList(listInfo, listUsernames) {
    listUsernames.forEach(username => {
        listInfo.forEach(scientific => {
            if (scientific.username === username) {
                console.log(scientific.name);
            }
        })
    });
}


// [x]: MAPAS

/* 
    Ahora bien, en este ejemplo, estamos buscando que no se itere en comparar cada uno de las
    llaves hasta que coincidan, sino que guardar todas en un mapa, y después buscar
    conforme al mapa como key, y así ya imprimiríamos los usuarios que tenemos en
    ambas listas. Y no compara uno por uno.
*/
function findAuthors(list,usernames) {
    // Creación de mapa
    let mapaAutores = new Map();
    list.forEach(author => {
        // Creamos una llave de identificación conforme a una llave, la cual será 
        // el identificador.
        const usernameKey = author.username;
        // Agregamos el objeto conforme a su llave.
        mapaAutores.set(usernameKey, author);
    });
    
    usernames.forEach(username => {
        const userMatch = mapaAutores.get(username);
        if (userMatch) {
            console.log(userMatch.name);
        }
    });

}

console.time('Array Search');
findAuthorsList(scientificAuthors, usernames);
console.timeEnd('Array Search');

console.log('_______________________________________');

console.time('Map Search');
findAuthors(scientificAuthors, usernames);
console.timeEnd('Map Search');



/* Al manejar un mapa creamos una key (identificador único), la cual nos ayuda a que se 
transforme en la identificación del objeto o dato que se va a mapear
conforme al mapa.

¿Por qué la diferencia entre mapa para operaciones?
Esto quiere decir que al obtener datos de un mapa 'no crece' el número de tiempo
que se va a llevar cabo en lo que busca dentro de estas operaciones.

e.g.
A diferencia de una lista (Array), esta hace la iteración hasta encontrar conforme a la búsqueda
que se este haciendo. En caso ejemplo de .find.
Por el contrario, con map, es búsqueda en formato de key. No realiza una iteración. Usa
internamente una tabla hash para acceder directo a la key.

Con la búsqueda de .get en un mapa, es tipo operación 0(1). es decir el tiempo es constante
Mientras una lista, el tiempo crece conforme hay más elementos 0(n)

✔️ Map → acceso directo por clave → rápido (O(1))
❌ Array → búsqueda secuencial → más lento (O(n))
*/