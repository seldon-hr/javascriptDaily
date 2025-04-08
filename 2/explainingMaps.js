// Lista de objetos sobre autores de libros de ciencia
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


function transformMap(list, key) {
    // Creación de mapa
    let mapaAutores = new Map();
    list.forEach(author => {
        // Creamos una llave de identificación conforme a una llave, la cual será 
        // el identificador.
        const usernameKey = author.username;
        // Agregamos el objeto conforme a su llave.
        mapaAutores.set(usernameKey, author);
    });
    console.log(mapaAutores.get(key));
}

transformMap(scientificAuthors, 'carlsagan');