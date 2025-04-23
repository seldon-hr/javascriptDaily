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
    ],
    listMultiAgentes: [
    {
      id: 1,
      condicionantes: [
        {
          key: "plazosPago",
          source: "valueForm",
          targetValue: 25,
          isEqualAll: 0
        },
        /* {
          key: "color",
          source: "valueForm",
          targetValue: "",
          isEqualAll: 1
        } */
      ],
      esMultipleCondicionante: false,
      consecuentes: [
        {
          ccComando: 101,
          source: "nombre",
          value: 'Parthenope'
        }
      ],
      esMultipleConsecuente: false,
      auxValorComparacion: ""
    }
    /*  {
      id: 2,
      condicionantes: [
        {
          key: "nivel_luz",
          source: "sensor_luz_ambiente",
          targetValue: {
            min: 100,
            max: 500
          },
          isEqualAll: 0
        }
      ],
      esMultipleCondicionante: false,
      consecuentes: [
        {
          ccComando: 205,
          source: "persiana_norte",
          value: "SUBIR"
        },
        {
          ccComando: 206,
          source: "luz_escritorio",
          value: 75
        },
        {
            ccComando: 207,
            source: "sistema_alarma",
            value: { armado: true, modo: "nocturno" }
        }
      ],
      esMultipleConsecuente: true,
      auxValorComparacion: ""
    },
    {
      id: 3,
      condicionantes: [],
      esMultipleCondicionante: true,
      consecuentes: [],
      esMultipleConsecuente: false,
      auxValorComparacion: "modo_inicial"
    } */
    ],
    multiAgentesMap: new Map(),
  },
  mutations: {
    increment(state) {
      state.contador++;
    },
    mutateMultiAgentesMap(state, entry) {
      state.multiAgentesMap = entry;
    }
  },
  actions: {
    updateListComponents({ state }, valor) {
        state.listComponentes = valor;
    },
    /**
     * Converts a list to a Map
     * @param {Array} list - Proviene del state
     * @returns {Map} - Asigna un Mapa a state
     */
    transformMultiAgentesToMap({ state, commit }) {
      //Filtrar multiAgentes para ser trabajados por los que se manejan por variableForm, solo para interacciones del escenario.
      const listMultiAgentes = state.listMultiAgentes.filter(multiAgente => multiAgente.condicionantes[0].source == 'valueForm');
      
      const multiAgentesMap = new Map();
      // Iteramos para agregar cada uno al mapa como llave. Esto solo funciona de momento para
      // agentes con un solo condicionante.
      listMultiAgentes.forEach(multiAgente => {
        if (multiAgente.condicionantes.length > 0) {
          const keyCondicionante = multiAgente.condicionantes[0].key;
          multiAgentesMap.set(keyCondicionante, multiAgente);
        }
      });

      commit('mutateMultiAgentesMap', multiAgentesMap )
      // Now you can access a specific multiAgente using: multiAgentesMap.get('plazosPago')
    },
   
    detectarMultiAgente({ state, dispatch }, campo) {
      const agente = state.multiAgentesMap.get(campo.key);
      if (agente) {
        console.log(`Esto campo tiene un agente: ${agente}`);

        if (!agente.esMultipleCondicionante) {
          /* Agentes con un solo condicionante */
          console.log('Agent has single condition, value:', agente.esMultipleCondicionante);
          if (agente) {
            const esIgualValor = agente.condicionantes[0].targetValue == campo.value;
            if (esIgualValor) {
              //Ejecutar el comando del multiAgente:
              //Ahora solo por uno, no por varios.
              switch (agente.consecuentes[0].ccComando) {
                case 101:
                  dispatch('comandoAsignarValor', agente.consecuentes[0]);
                  break;
              }
            } else {
              console.log(`No se hizo, el valor no conincide, ${esIgualValor}`);
            }
          }
        } else {
          console.log('Agent has multiple conditions, value:', agente.esMultipleCondicionante);
        }
      }
    },
    comandoAsignarValor({ state }, consecuente) {
      //Obtener campo a afectar
      const campo = findCampoAndReturn(state.listComponentes, consecuente.source);
      campo.value = consecuente.value;
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