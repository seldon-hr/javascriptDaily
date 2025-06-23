import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import App from "./App.vue";

import MapaAgentes from "./Class/MapaAgentes";

// Usa los plugins
Vue.use(Vuex);
Vue.use(Vuetify);

// Definición del store
const store = new Vuex.Store({
  state: {
    contador: 0,
    listComponentes: [
      { index: 1, key: "plazosPago",     value: "", type: "", velocidad: null },
      { index: 2, key: "color",          value: "", type: "", velocidad: null },
      { index: 3, key: "nombre",         value: "", type: "", velocidad: null },
      { index: 4, key: "resultadoFinal", value: "", type: "", velocidad: null },
    ],
    listMultiAgentes: [],
    multiAgentesMap: new MapaAgentes(),
    velocidad: null,
    data: [],
    valorComponente: {},
  },
  mutations: {
    increment(state) {
      state.contador++;
    },
    mutateMultiAgentesMap(state, entry) {
      state.multiAgentesMap = entry;
    },
    mutateListMultiAgentes(state, entry) {
      state.listMultiAgentes = entry;
    },
    mutateComponent(state, { index, field, value }) {
      const componentToAffect = state.listComponentes[index];
      if (componentToAffect) {
        componentToAffect[field] = value;
      }
    },
    mutateVelocidad(state, entry) {
      state.velocidad = entry;
    },
    mutateData(state, data) {
      state.data = data;
    },
    mutateListComponentes(state, components) {
      state.listComponentes = components;
    },
    mutateValorComponente(state, entry) {
      state.valorComponente = entry;
    },
  },
  actions: {
    updateComponente({ commit }, entry) {
      console.log('Valor recibido;', entry);
      commit('mutateValorComponente', entry);
    },
    updateVelocidad({ commit }, newValue) {
      commit('mutateVelocidad', newValue);
    },
    updateListComponents({ state }, valor) {
      state.listComponentes = valor;
    },

    async cargarMultiAgentes({ commit, dispatch }) {
      await fetch('./prototypesLists/listMultipleMultiAgentesOneCampo.json')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          // Si el JSON tiene estructura con propiedad nombrada
          const multiAgentes = data.multiAgentes || data;
              
          console.log('Multi-agentes cargados:', multiAgentes);
          commit('mutateListMultiAgentes', multiAgentes);
        })
        .catch(error => {
          console.error('Error al cargar los multi-agentes:', error);
        });
      
      //Transformar MultiAgentes a un mapa
      dispatch('transformMultiAgentesToMap');
    },

    /**
     * Transforma la lista de multiAgentes en estructuras optimizadas para búsqueda
     * @param {Array} list - Proviene del state
     * @returns {Map, Array} - Mapas y listas para diferentes tipos de agentes
     */
    transformMultiAgentesToMap({ state, commit }) {
      // Filtrar multiAgentes para ser trabajados por los que se manejan por variableForm
      const listMultiAgentes = state.listMultiAgentes.filter(
        multiAgente => multiAgente.condicionantes[0].source == 'valueForm'
      );
      
      /* 
      Mapa para agrupar agentes por key (para los que comparten keys)
      En este se guardan momentanemente los agentes por llave.
        plazoPago -> Array(3)[...]
        resultadoFinal -> Array[{...}]

        Otros campos con agentes...
      */const mapaKeysPrototype = new Map();

      
      /* Se recorre el Array, y se guardan por key los agentes que pertenecen a la misma key.*/
      listMultiAgentes.forEach(multiAgente => {
        if (multiAgente.condicionantes.length > 0) {
          /*
          Este caso dejó de ser funcional, porque existen pruebas de como este solo guarda el agente a una primera llave, bien
          pero si tiene más llaves de condicionantes, solo estamos actando la primera, el detalle aquí, es que.
          Si tiene más llaves, estas se generan después, pero solo apuntan a los agentes que fueron para esta llave.
          Entonces ocurré que estas llaves ya no está porque tenemos que traer al agente completo, por cualquiera de
          sus llaves, Con el caso ocurría el siguiente escencardio:

          Tomaaba el agente[0], que solo responda a claveAgente.
          no obstante, este tiene n condicioantes. 

          Seguía con los demás, mientras estos fueron parte de agente.condicionantes[0], si los tomaba si claves coincidian.
          El detalle venía posteriormente. Cuando creamos nuestras llaves secundarias.

          agente.esMultipleCondicionante
            -> Extrae todas sus keys[condicionantes] apunten(-->) a keyPrimaria de nuestro mapaAgentes.

          !agente.esMultipleCondicionante 
            -> Asigna su key condicionates[0] a keyPrimaria, por lo general es la priemra del mapaAgentes.

          Posteriormente, en una segunda iteración, como los mapas solo responden a una llave. then.
          keys[nombreAsegurado, apellidoPatAsegurado]
          Ya existe 'nombreAsegurado' lo agregaba y que ahora apuntara a este agente el nuevo.
          ASí -> 
          claveAgente, claveAgente
          nombreAsegurado, claveAgente,

          Pero ahora lo sobreescribe quedando así:
          claveAgente -> claveAgente
          nombreAsegurado -> nombreAsegurado
          nombreAsegurado -> appellidoPatASegurado.

          Es deicr, ahora apuntaba a otro agente. Entonces si se pedía llamar al campo nombreAsegurado, pero con el valor del agente que comparte con claveAgente, entonces
          no existía desde el primer mapa, y después en el segundo tampoco (por esto agente.condiconantes[0]). 
          Esto porque tenemos Caso: MúltiplesAgentes que son agentesCompartidos (o llavesCompartidas), donde además estas llaves son propiad de múltiples condicionantes.
          Agente[0]:
            Condicionante[0]: key: claveAgente
            Condicionante[1]: key: nombreAsegurado

          Agente[1]:
            Condicionante[0]: key: nombreAsegurado
            Condicionante[1]: key: appellidoPatASegurado

          Resultando en que la llave nombreAsegurado solo exista para el Agente[1], por tomar llave del primer condicioante.
          Bien, ahora solo nos quedamos con un solo Mapa, un mapa normal.
          donde los valores van a quedar así.

          claveAgente -> Agente[0],

          nombreAsegurado -> [
                              Agente[0],
                              Agente[1]
          ],

          apellidoPatAsegurado -> Agente[1]
          */
          const keyCondicionante = multiAgente.condicionantes[0].key;
          
          // Si esta key ya existe en el mapa, agregamos este agente a su lista
          if (mapaKeysPrototype.has(keyCondicionante)) {
            //A su valor de la llave, agregamso este nuevo agente.
            mapaKeysPrototype.get(keyCondicionante).push(multiAgente);
          } else {
            // Si no existe, creamos una nueva lista con este agente
            mapaKeysPrototype.set(keyCondicionante, [multiAgente]);
          }
        }
      });

      console.log(mapaKeysPrototype);
      
      // Arrays para almacenar los agentes según su categoría
      const agentesUnicos = []; //agenteÚnico, es decir aquello campos que solo se les ha configurado un solo agente.
      const agentesCompartidos = []; //agenteCompartido, es decir aquellos campos que se les has configurado más de un agente.
      /*
        agenteUnico: plazoPago -> un solo agente, en el mapa se configura así: plazoPago -> [{}] length = 1.
        agenteCompartido: institucion -> Múltiples agentes para un campo: institucion -> [].length > 1.
      */


      // Iteramos en cada uno de los agentes según las llaves, donde tenemos compartidos[n], como únicos[{1}]
      /* Iteración didáctica, por si necesitamos diferenciar sobre las
        llaves que comparten agentes y las llaves que solo tienen un único agente. */
      mapaKeysPrototype.forEach((agents, key) => {
        //Es decir agenteÚnico. Si solo tiene un valor.
        if (agents.length === 1) {
          const agentUnico = agents[0];
          agentesUnicos.push(agentUnico);
        } else {
          // varios agentes para esta key
          agentesCompartidos.push(...agents);
          
        }
      });

      /* console.log('Agentes únicos:', agentesUnicos.length);
      console.log('Agentes compartidos:', agentesCompartidos.length); */

      // Guardamos el mapa resultante en el estado
      commit('mutateMultiAgentesMap', mapaKeysPrototype);
      
      // También podríamos guardar las listas separadas si se necesitan
      // commit('mutateAgentesUnicos', agentesUnicos);
      // commit('mutateAgentesCompartidos', agentesCompartidos);
    },
   
    detectarMultiAgente({ state, dispatch }, campo) {
      /* Mandamos campo.key y nos devolvera un Agente si este campo tiene
         agentes configurados. */
      const agente = state.multiAgentesMap.get(campo.key);
      if (agente) {

        //El agente puedes es único(Objecto) o puede ser compartido(Array).
        const agenteEsCompartido = Array.isArray(agente);;
        if (agenteEsCompartido) {
          console.log(`Este campo tiene ${agente.length} agentes compartidos`);
          //Procesar cada agente del resultado:
          agente.forEach(agente => {
            procesarAgente(agente, campo, dispatch, state);
          });
        } else {
          console.log(`Esto campo tiene un agente: ${agente}`);
          procesarAgente(agente, campo, dispatch, state);
        }
      }
    },
    
    comandoAsignarValor({ state }, consecuente) {
      //Obtener campo a afectar
      const campo = findCampoAndReturn(state.listComponentes, consecuente.source);
      if (campo) {
        campo.value = consecuente.value;
      } else {
        console.log(`Campo no encontrado: ${consecuente.source}`);
      }
    },
    updateComponent({ commit }, { index, field, value }) {
      commit('mutateComponent', { index, field, value });
    },

    /* Guardar Datos */
    simulationSaveData({ state, commit }) {
      const listaToSave = state.listComponentes.map(component => ({
        ...component,
        velocidad: component.velocidad?.text || component.velocidad,
      }));

      commit('mutateData', listaToSave);
      commit('mutateListComponentes', []);
    },
    /* async */ cargarComponents({ state, commit }) {
      if (!state.data || state.data.length === 0) {
        alert('No hay datos guardados para cargar');
        return;
      }
      
      alert('Vamos a empezar a cargar los Componentes');
      
      // Restaurar objetos de velocidad desde strings
      const componentesRestaurados = state.data.map(component => ({
        ...component,
        /* velocidad: typeof component.velocidad === 'string' 
          ? { text: component.velocidad, value: getValueFromText(component.velocidad) }
          : component.velocidad */
      }));
      
      commit('mutateListComponentes', componentesRestaurados);
    }
  }
});

const vuetify = new Vuetify();

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

function findCampoAndReturn(listComponentes, targetCampo) {
  let campo = listComponentes.find(compound => compound.key === targetCampo);
  return campo;
}

function ejecutarComando(consecuente, dispatch) {
  switch (consecuente.ccComando) {
    case 101:
      dispatch('comandoAsignarValor', consecuente);
      break;
    // Aquí puedes agregar más casos según necesites
    default:
      console.log(`Comando no reconocido: ${consecuente.ccComando}`);
  }
}

function procesarAgente(agente, campo, dispatch, state) {
      if (!agente.esMultipleCondicionante) {
        /* Agentes con un solo condicionante */
        console.log('Agente con condición simple, valor:', campo.value);
        
        const esIgualValor = agente.condicionantes[0].targetValue == campo.value;
        if (esIgualValor) {
          // Ejecutar el(los) comando(s) del agente
          if (agente.esMultipleConsecuente) {
            // Si tiene múltiples consecuentes, los ejecutamos todos
            agente.consecuentes.forEach(consecuente => {
              ejecutarComando(consecuente, dispatch);
            });
          } else {
            // Solo tiene un consecuente
            ejecutarComando(agente.consecuentes[0], dispatch);
          }
        } /* else {
          console.log(`------> No se ejecutó, el valor no coincide: ${campo.value} != ${agente.condicionantes[0].targetValue}`, '\n Esta línea aparece después de haber corroborado cada uno de los valores posibles hasta el primero que haga match.');
        } */
      }
      //TODO: Para poder correr lo múltiples condicionantes, primero hay que asginar todos como condicionantes disponibles.
      /* 
        Llamar desde múltiples llaves al mismo agentes, como en mapsSeveralKeys.js
      */
       else {
        /* Agentes con múltiples condicionantes */
        console.log('Agente con múltiples condiciones');
        
        // Verificar que todas las condiciones se cumplan
        const todasLasCondicionesCumplidas = agente.condicionantes.every(condicion => {
          // Buscar el campo correspondiente en listComponentes
          const campoCorrespondiente = state.listComponentes.find(c => c.key === condicion.key);
          // Verificar si existe y si su valor coincide con el target
          return campoCorrespondiente && campoCorrespondiente.value == condicion.targetValue;
        });
        
        if (todasLasCondicionesCumplidas) {
          console.log('Todas las condiciones se cumplen, ejecutando consecuentes');
          // Ejecutar consecuentes
          if (agente.esMultipleConsecuente) {
            agente.consecuentes.forEach(consecuente => {
              ejecutarComando(consecuente, dispatch);
            });
          } else {
            ejecutarComando(agente.consecuentes[0], dispatch);
          }
        } else {
          console.log('No todas las condiciones se cumplen');
        }
      }
    }








function compararValoresCampoCondicionante(campo, condicionante) {
  // Si es “igual a cualquiera”, devolvemos true
  if (condicionante.isEqualAll) {
    return true;
  }

  const valCampo = campo.valor;
  const valorCondicionante = condicionante.value;
  const tipoCampo = typeof valCampo;
  const tipoCondicionante = typeof valorCondicionante;

  // Si los tipos coinciden procedemos a comparar
  if (tipoCampo === tipoCondicionante) {
    switch (tipoCampo) {
      case 'boolean':
      case 'number':
        return valCampo === valorCondicionante;
        
      case 'string':
        //String vació siempre false
        if (valCampo === "" || valorCondicionante === "") {
          return false;
        } else {
          return valCampo === valorCondicionante;
        }

      case 'undefined':
        return false;

      case 'object':
        // null siempre false
        if (valCampo === null || valorCondicionante === null) {
          return false;
        }
        // Array
        if (Array.isArray(valCampo) && Array.isArray(valorCondicionante)) {
          if (valCampo.length !== valorCondicionante.length) return false;
          return valCampo.every((el, i) => el === valorCondicionante[i]);
        }
        // Object: Comparar con la propiedad nombre. Casos generales:
        return valCampo.nombre === valorCondicionante;

      //Casos execpción, como descripción(autos), estado, ccEstado.


      /* 
      // Objeto plano (incluye comparación de arrays internos)
      const keysA = Object.keys(valCampo);
      const keysB = Object.keys(valorCondicionante);
      // Diferente cantidad de propiedades
      if (keysA.length !== keysB.length) return false; 


      return keysA.every(key => {
          if (!valorCondicionante.hasOwnProperty(key)) return false;
          const v1 = valCampo[key];
          const v2 = valorCondicionante[key];
          // Si la propiedad es un array, comparamos elemento a elemento
          if (Array.isArray(v1) && Array.isArray(v2)) {
              if (v1.length !== v2.length) return false;
              return v1.every((item, idx) => item === v2[idx]);
          }
          // Resto de valores con igualdad estricta
          return v1 === v2;
      }); */
    }
  }
}
