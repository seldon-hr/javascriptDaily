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

function transformMap(list) {
    
    let mapaAutores = new Map();
    list.forEach(author => {
        const usernameKey = author.username;
        mapaAutores.set(usernameKey, author);
    });
    console.log(mapaAutores);
}

transformMap(scientificAuthors);