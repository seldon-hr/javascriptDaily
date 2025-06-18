<template>
  <v-col>
    <div class="custom-text-field" :cols="md">
      <v-autocomplete
        v-model="speedValue"
        label="Tipo de Manejo"
        :items="listSpeeds"
        :return-object="true"
        item-text="text"
      />
    </div>
  </v-col>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "SelectSpeed",
  data() {
    return {
      listSpeeds: [
        {
          text: "Manual",
          value: 3000,
        },
        {
          text: "Control",
          value: 2000,
        },
        {
          text: "Turbo",
          value: 5000,
        },
      ],
    };
  },
  props: {
    velocidad: {
      type: [String, Number, Array, Object],
      default: null,
    },
    md: { type: [String, Number] },
  },
  computed: {
    speedValue: {
      get() {
        return this.velocidad;
      },
      set(newValue) {
        //Agregar una validación, para no actualizar sino cambia.
        if (newValue !== this.velocidad) {
          this.$emit("update:velocidad", newValue);
        }
      },
    },
  },
  methods: {
    ...mapActions({
      detectarMultiAgente: "detectarMultiAgente",
    }),
  },
  watch: {
    velocidad: {
      handler(val) {
        if (typeof val === "string" && this.listSpeeds.length > 0) {
          const newVelocidad = this.listSpeeds.find((s) => s.text === val);
          this.speedValue = newVelocidad;
        }
      },
      immediate: true,
    },
  },
};
</script>
<style scoped>
.outlined-input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  outline: none;
  transition: border-color 0.3s;
}

.outlined-input:focus {
  border-color: #42b983;
}
</style>
  