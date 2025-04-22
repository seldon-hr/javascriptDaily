<template>
  <v-app>
    <v-container>
      <h1>Prototipo de Vue</h1>
      <v-divider />
      <v-row class="ma-3">
        <custom-text-field
          v-for="(compound, index) in listComponentes"
          v-model="compound.value"
          :key="index"
        />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CustomTextField from "./components/CustomTextField.vue";
export default {
  name: "App",
  components: {
    CustomTextField,
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
    }),
    /*     incrementar() {
      this.$store.commit("increment");
    }, */
  },
};
</script>