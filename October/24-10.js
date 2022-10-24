function compareMembers(person1, person2 = person) {
    if (person !== person2) {
        console.log('Not the same!')
    } else {
        console.log('They are the same!')
    }
}

const person = {
    name: 'Dan'
};
compareMembers(person);

/* 
Output They are the same!

Tanto el parámetro person1 como person2 adopatará el valor de peson, osea el objeto { name: 'Dan'}.

Los objetos se pasan por referencia. En el ejempl, person1, y person2 apuntan a la misma direección de memoria
entonces la condión del if no se cumple y pasamos a imprimir They are the same!
*/