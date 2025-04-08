// Generador de datos simulados
function generateScientificAuthors(count) {
    const authors = [];
    for (let i = 0; i < count; i++) {
        authors.push({
            name: `Scientist ${i}`,
            username: `user${i}`,
            birthYear: 1900 + (i % 100),
            notableWorks: [`Work ${i}`],
            field: "Science",
            awards: [`Award ${i}`]
        });
    }
    return authors;
}

function generateUsernames(authorList, totalUsernames) {
    const result = [];

    // Agregamos 100 coincidencias reales
    for (let i = 0; i < 100; i++) {
        result.push(`user${i * 10}`); // Ej: user0, user10, user20, ...
    }

    // Agregamos el resto como usuarios inexistentes
    for (let i = 0; i < totalUsernames - 100; i++) {
        result.push(`noMatchUser${i}`);
    }

    return result;
}

// Generamos los datos
const scientificAuthors = generateScientificAuthors(10000);
const usernames = generateUsernames(scientificAuthors, 1000);

// Función con Arrays (O(n*m))
function findAuthorsList(listInfo, listUsernames) {
    listUsernames.forEach(username => {
        const found = listInfo.find(scientific => scientific.username === username);
        if (found) {
            // console.log(found.name); // comentado para evitar bloquear la consola
        }
    });
}

// Función con Map (O(n) para construir + O(m) para buscar)

function findAuthorsMap(list, usernames) {
    const authorMap = new Map();
    list.forEach(author => {
        authorMap.set(author.username, author);
    });

    usernames.forEach(username => {
        const match = authorMap.get(username);
        if (match) {
            // console.log(match.name); // comentado para evitar bloquear la consola
        }
    });
}

// Benchmark
console.time('Array Search');
findAuthorsList(scientificAuthors, usernames);
console.timeEnd('Array Search');

console.log('----------------------------------------');

console.time('Map Search');
findAuthorsMap(scientificAuthors, usernames);
console.timeEnd('Map Search');
