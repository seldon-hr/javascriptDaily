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
    type: { type: [String, Object], default: "text" },
    value: { type: [String, Number, Boolean, Object, Array], default: "" },
  },
  computed: {
    localType: {
      get() {
        return this.type;
      },
      set(value) {
        if (value !== this.type) {
          this.$emit("update:type", value);
        }
      },
    },
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      },
    },
  },
  watch: {
    type: {
      handler(val) {
        if (typeof val === "string" && this.items.length > 0) {
          const newType = this.items.find((i) => i.text === val);
          if (newType) {
            this.localType = newType;
          }
        }
      },
    },
  },
};
</script>