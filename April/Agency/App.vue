<template>
  <v-app>
    <v-container>
      <h1>Prototipo de Vue</h1>
      <v-btn @click="cargarMultiAgentes"> Cargar Agentes </v-btn>
      <v-btn @click="refreshPage"> Refresh </v-btn>
      <v-divider />
      <v-row class="ma-3">
        <template v-for="(component, index) in listComponentes">
          <v-row :key="index">
            <select-speed
              :velocidad="component.velocidad"
              :md="4"
              @update:velocidad="
                (newVal) =>
                  updateComponent({ index, field: 'velocidad', value: newVal })
              "
            />
            <valores
              :type="component.key"
              :value="component.value"
              :md="8"
              @update:value="
                (newVal) =>
                  updateComponent({ index, field: 'value', value: newVal })
              "
              @update:type="
                (newVal) =>
                  updateComponent({ index, field: 'type', value: newVal })
              "
            >
              <!-- @update="update(type: 'value', value: 'value')" -->
            </valores>
          </v-row>
        </template>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CustomTextField from "./components/CustomTextField.vue";
import SelectSpeed from "./components/SelectSpeed.vue";
import Valores from "./components/Valores.vue";
export default {
  name: "App",
  data() {
    return {
      valor: null,
    };
  },
  components: {
    CustomTextField,
    Valores,
    SelectSpeed,
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
      updateVelocidad: "updateVelocidad",
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