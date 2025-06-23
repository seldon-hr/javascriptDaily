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
              :type="component.type"
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
      <v-row>
        <componente
          :valor="valorComponente"
          @update:valor="(newVal) => updateComponente(newVal)"
        />
      </v-row>
    </v-container>
    <v-row class="ma-0 pa-0">
      <v-col :offset-md="8">
        <v-btn @click="simulationSaveData"> Guardar Datos </v-btn>
      </v-col>
      <v-col>
        <v-btn @click="cargarComponents"> Cargar Datos </v-btn>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CustomTextField from "./components/CustomTextField.vue";
import SelectSpeed from "./components/SelectSpeed.vue";
import Valores from "./components/Valores.vue";
import Componente from "./components/Component.vue";
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
    Componente,
  },
  computed: {
    ...mapState({
      state: (state) => state,
    }),
    listComponentes() {
      return this.state.listComponentes;
    },
    valorComponente: {
      get() {
        return this.state.valorComponente;
      },
      set(val) {
        this.updateComponente(val);
      },
    },
  },
  methods: {
    ...mapActions({
      updateListComponents: "updateListComponents",
      detectarMultiAgente: "detectarMultiAgente",
      cargarMultiAgentes: "cargarMultiAgentes",
      updateComponent: "updateComponent",
      updateVelocidad: "updateVelocidad",
      simulationSaveData: "simulationSaveData",
      cargarComponents: "cargarComponents",
      updateComponente: "updateComponente",
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