const mapa = new Map();
const mapaKeysInstitucionValor = new Map();
const listTodosLosAgentesCampo = [];


let objetoCemexAgente = {
    key: 'institucion', // Se va a extraer antes
    source: 'variableForm',
    tagetValue: { value: 'CEMEX' },
    isEquallAll: 0,
}
let objetoPepsicoAgente = {
    key: 'institucion', // Se va a extraer antes
    source: 'variableForm',
    tagetValue: { value: 'PEPSICO' },
    isEquallAll: 0,
}

let keyCEMEX = { value: 'CEMEX' };
let keyPEPSICO = { value: 'PEPSICO' }


listTodosLosAgentesCampo.push(objetoCemexAgente);
listTodosLosAgentesCampo.push(objetoPepsicoAgente);

mapa.set('institucion', listTodosLosAgentesCampo);

/* mapa.set('institucion', mapaKeysInstitucionValor
    .set(keyCEMEX, objetoCemexAgente)
    .set(keyPEPSICO, objetoPepsicoAgente)
); */

//El que se va a estar iterando o traer.
/* const agenteSeñalador = mapa.get('institucion').get({ value: 'CEMEX' }); */
//Caso espacial, tiene vairos condicionales.
/* console.log(agenteSeñalador); */


let campo = {
    columna: 'institucion',
    valor: 'CEMEX',
};

const campoFind = mapa.get(campo.columna);
/* console.log(campoFind); */
if (campoFind) {
    if (campoFind.length > 0) {
        let encontradoValor = campoFind.find(agente => agente.tagetValue.value = campo.valor);
        console.log(encontradoValor);
        if (encontradoValor) {
            console.log(`Valor que hace match ${encontradoValor.tagetValue.value}`);
        } else {
            console.log('no fue encontrado');
        }
    }
} else {
    console.log(campoFind);
}