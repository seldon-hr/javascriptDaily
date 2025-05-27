<template>
  <v-col :md="md" class="ma-2 indigo lighten-2">
    <v-row>
      <v-col>
        <v-autocomplete
          v-model="localType"
          :items="items"
          outlined
          label="Tipo"
        />
      </v-col>
      <v-col>
        <v-text-field v-model="localValue" label="Valor" outlined clearable />
      </v-col>
    </v-row>
  </v-col>
</template>
<script>
export default {
  name: "Valores",
  data() {
    return {
      items: [{ text: "Item 1" }, { text: "Item 2" }, { text: "Item 3" }],
    };
  },
  props: {
    md: { type: Number, String, default: 4 },
    type: { type: String, default: "text" },
    value: { type: [String, Number, Boolean, Object, Array], default: "" },
  },
  computed: {
    localType: {
      get() {
        return this.type;
      },
      set(value) {
        this.emit({ type: type, val: value });
      },
    },
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.emit({ type: type, val: value });
      },
    },
  },
};
</script>