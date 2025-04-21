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
        { index: 1, value: "" },
        { index: 2, value: "" },
        { index: 3, value: "" },
    ]
  },
  mutations: {
    increment(state) {
      state.contador++;
    }
  },
  actions: {
    updateListComponents(valor) {
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