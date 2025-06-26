<template>
  <v-autocomplete
    v-model="valorVModel"
    :return-object="true"
    item-text="test"
    :items="items"
    label="Listo para test:"
  />
</template>
<script>
export default {
  data() {
    return {
      items: [
        { test: "Intercontinental Missil", valueTest: "damage done" },
        { test: "Nuclear Bomb", valueTest: "catasthrophic" },
        { test: "Hydrogen Bomb", valueTest: "doomsday" },
      ],
    };
  },
  props: {
    value: { type: [String, Object] },
  },
  computed: {
    valorVModel: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("set:value", val);
      },
    },
  },
};
</script>