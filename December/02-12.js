let names = ['dan', 'brussate', 'walker'];
function createFrame(names) {
    let caracter = '*';
    let frontFrame = '';
    let longestName = 0;
    let result = '';

    names.forEach(name => {
        if (name.length > longestName) {
            longestName = name.length;
        }
    });
    longestName =longestName + 4;
    
    for (let index = 0; index < longestName; index++) {
        frontFrame += caracter;
    }

    result += frontFrame + '\n';
    names.forEach(nombre => {
        let counterString = 0;
        counterString = (longestName - 3) - nombre.length;
        let spaces = '';
        let space = ' ';
        for (let index = 0; index < counterString; index++) {
            spaces += space;
        }
        result += '* ' + nombre +  spaces + '*\n';
    });
    result += frontFrame;

    return result;
}

console.log(createFrame(names));

