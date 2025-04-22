<template>
  <v-col>
    <div class="custom-text-field">
      <input v-model="innerValue" class="outlined-input" type="text" />
    </div>
  </v-col>
</template>

<script>
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
  watch: {
    value() {
      const valor = this.campo.value;
      console.log(`Valor de ${this.campo.key}: ${valor}`);
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
