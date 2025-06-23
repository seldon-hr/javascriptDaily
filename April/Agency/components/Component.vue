<template>
  <v-col>
    <v-autocomplete
      v-model="valorComponente"
      :items="listaValores"
      :return-object="true"
      item-text="texto"
    />
  </v-col>
</template>

<script>
export default {
  name: "Componente",
  data: () => {
    return {
      listaValores: [
        {
          texto: "Salud",
          value: "400",
        },
        {
          texto: "Dinámicos",
          value: "200",
        },
        {
          texto: "Naturales",
          value: "100",
        },
      ],
    };
  },
  props: {
    valor: { type: [String, Object] },
  },
  computed: {
    valorComponente: {
      get() {
        return this.valor;
      },
      set(newVal) {
        this.$emit("update:valor", newVal);
      },
    },
  },
};
</script>
<style>
</style>