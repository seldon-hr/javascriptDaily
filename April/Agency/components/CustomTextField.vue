<template>
  <v-col>
    <div class="custom-text-field">
      <input v-model="innerValue" class="outlined-input" type="text" />
    </div>
  </v-col>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CustomTextField",
  props: {
    value: {
      type: [String, Number, Array, Object],
      default: null,
    },
    campo: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
  methods: {
    ...mapActions({
      detectarMultiAgente: "detectarMultiAgente",
    }),
  },
  watch: {
    value(value) {
      this.campo.value = value;
      console.log(`Valor de ${this.campo.key}: ${this.campo.value}`);
      this.detectarMultiAgente(this.campo);
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
