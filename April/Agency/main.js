import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import App from "./App.vue";


// Usa los plugins
Vue.use(Vuex);
Vue.use(Vuetify);

// Definición del store
const store = new Vuex.Store({
  state: {
    contador: 0,
    listComponentes: [
        { index: 1, key: "plazosPago", value: "" },
        { index: 2, key: "color", value: "" },
        { index: 3, key: "nombre", value: "" },
        { index: 4, key: "resultadoFinal", value: "" },
    ],
    listMultiAgentes: [],
    multiAgentesMap: new Map(),
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
  },
  actions: {
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
      
      // Mapa para los agentes con condicionante único (no compartido)
      const multiAgentesMap = new Map();
      // Mapa para agrupar agentes por key (para los que comparten keys)
      const keyToAgentsMap = new Map();

      
      // Primero agrupamos los agentes por sus keys para identificar duplicados
      listMultiAgentes.forEach(multiAgente => {
        if (multiAgente.condicionantes.length > 0) {
          const keyCondicionante = multiAgente.condicionantes[0].key;
          
          // Si esta key ya existe en el mapa, agregamos este agente a su lista
          if (keyToAgentsMap.has(keyCondicionante)) {
            //donde push lo esta agregando a su valor de la key.
            keyToAgentsMap.get(keyCondicionante).push(multiAgente);
          } else {
            // Si no existe, creamos una nueva lista con este agente
            keyToAgentsMap.set(keyCondicionante, [multiAgente]);
          }
        }
      });
      
      // Arrays para almacenar los agentes según su categoría
      const agentesUnicos = [];
      const agentesCompartidos = [];
      
      // Recorremos el mapa de keys para clasificar los agentes
      keyToAgentsMap.forEach((agents, key) => {
        if (agents.length === 1) {
          // Si solo hay un agente para esta key, es único
          agentesUnicos.push(agents[0]);
          // También lo agregamos al mapa original para búsqueda rápida
          multiAgentesMap.set(key, agents[0]);
        } else {
          // Si hay múltiples agentes para esta key, son compartidos
          agents.forEach(agent => {
            agentesCompartidos.push(agent);
          });
          
          // También agregamos la lista completa al mapa para esta key
          multiAgentesMap.set(key, agents);
        }
      });
      
      console.log('Agentes únicos:', agentesUnicos.length);
      console.log('Agentes compartidos:', agentesCompartidos.length);
      
      // Guardamos el mapa resultante en el estado
      commit('mutateMultiAgentesMap', multiAgentesMap);
      
      // También podríamos guardar las listas separadas si se necesitan
      // commit('mutateAgentesUnicos', agentesUnicos);
      // commit('mutateAgentesCompartidos', agentesCompartidos);
    },
   
    detectarMultiAgente({ state, dispatch }, campo) {
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
      //  else {
      //   /* Agentes con múltiples condicionantes */
      //   console.log('Agente con múltiples condiciones');
        
      //   // Verificar que todas las condiciones se cumplan
      //   const todasLasCondicionesCumplidas = agente.condicionantes.every(condicion => {
      //     // Buscar el campo correspondiente en listComponentes
      //     const campoCorrespondiente = state.listComponentes.find(c => c.key === condicion.key);
      //     // Verificar si existe y si su valor coincide con el target
      //     return campoCorrespondiente && campoCorrespondiente.value == condicion.targetValue;
      //   });
        
      //   if (todasLasCondicionesCumplidas) {
      //     console.log('Todas las condiciones se cumplen, ejecutando consecuentes');
      //     // Ejecutar consecuentes
      //     if (agente.esMultipleConsecuente) {
      //       agente.consecuentes.forEach(consecuente => {
      //         ejecutarComando(consecuente, dispatch);
      //       });
      //     } else {
      //       ejecutarComando(agente.consecuentes[0], dispatch);
      //     }
      //   } else {
      //     console.log('No todas las condiciones se cumplen');
      //   }
      // }
    }