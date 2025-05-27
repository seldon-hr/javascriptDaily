<template>
  <v-app>
    <v-container>
      <h1>Prototipo de Vue</h1>
      <v-btn @click="cargarMultiAgentes"> Cargar Agentes </v-btn>
      <v-btn @click="refreshPage"> Refresh </v-btn>
      <v-divider />
      <v-row class="ma-3">
        <!-- <custom-text-field
          v-for="(compound, index) in listComponentes"
          v-model="compound.value"
          :campo="compound"
          :key="index"
        /> -->
        <valores
          v-for="(component, index) in listComponentes"
          :key="index"
          :type="component.key"
          :value="component.value"
          :md="12"
          @update="updateComponent(type: 'type', value: 'value')"
        >
          <!-- @update="update(type: 'value', value: 'value')" -->
        </valores>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CustomTextField from "./components/CustomTextField.vue";
import Valores from "./components/Valores.vue";
export default {
  name: "App",
  components: {
    CustomTextField,
    Valores,
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
      updateComponent: "updateComponent",
    }),
    refreshPage() {
      window.location.reload();
    },
    /*     incrementar() {
      this.$store.commit("increment");
    }, */
  },
};
</script>