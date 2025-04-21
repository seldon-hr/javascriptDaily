<template>
  <v-app>
    <v-container>
      <h1>Prototipo de Vue con Vite.</h1>
      <p>{{ mensaje }}</p>
      <v-btn @click="incrementar">Incrementar</v-btn>
      <p>Contador: {{ $store.state.contador }}</p>
      <v-divider />
      <v-row>
        <v-col v-for="compound in listComponentes" :key="compound.index">
          <v-text-field v-model="compound.value"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    mensaje() {
      return "¡Bienvenido a la app con Vite!";
    },
    ...mapState({
      state: (state) => state,
    }),

    listComponentes: {
      get() {
        return this.state.listComponentes;
      },
      set(valor) {
        this.updateListComponents({
          propiedad: "clave",
          valor: valor,
        });
      },
    },
  },
  methods: {
    ...mapActions({
      updateListComponents: "updateListComponents",
    }),
    incrementar() {
      this.$store.commit("increment");
    },
  },
};
</script>