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
]
  },
  mutations: {
    increment(state) {
      state.contador++;
    }
  },
  actions: {
    updateListComponents({ state }, valor) {
        state.listComponentes = valor;
    }
    
  }
});

const vuetify = new Vuetify();

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");