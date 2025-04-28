<template>
  <v-app>
    <v-container>
      <h1>Prototipo de Vue</h1>
      <v-btn @click="cargarMultiAgentes"> Cargar MultiAgentes </v-btn>
      <v-divider />
      <v-row class="ma-3">
        <custom-text-field
          v-for="(compound, index) in listComponentes"
          v-model="compound.value"
          :campo="compound"
          :key="index"
        />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CustomTextField from "./components/CustomTextField.vue";
export default {
  name: "App",
  components: {
    CustomTextField,
  },
  computed: {
    ...mapState({
      state: (state) => state,
    }),

    listComponentes() {
      return this.state.listComponentes;
    },
  },
  methods: {
    ...mapActions({
      updateListComponents: "updateListComponents",
      detectarMultiAgente: "detectarMultiAgente",
      cargarMultiAgentes: "cargarMultiAgentes",
    }),
    /*     incrementar() {
      this.$store.commit("increment");
    }, */
  },
};
</script>