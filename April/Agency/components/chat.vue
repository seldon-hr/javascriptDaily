<template>
  <v-main>
    <h2>Chatting with the AI Prototype.</h2>
    <v-text-field v-model="query"> </v-text-field>
    <v-btn @click="handleSend">Send</v-btn>

    <v-textarea
      v-model="response"
      label="Answer"
      rows="4"
      auto-grow
      outlined
    ></v-textarea>
  </v-main>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Chat",
  data: () => {
    return {};
  },
  props: {
    valor: { type: [String] },
  },
  computed: {
    ...mapState({
      chatController: "chatController",
    }),
    query: {
      get() {
        return this.chatController.query;
      },
      set(newVal) {
        this.setQuery(newVal);
      },
    },
    response: {
      get() {
        return this.chatController.response;
      },
      set(newVal) {
        this.setResponse(newVal);
      },
    },
  },
  methods: {
    ...mapActions({
      setQuery: "chatController/setQuery",
      setResponse: "chatController/setResponse",
      sendQuery: "chatController/sendQuery",
    }),
    async handleSend() {
      console.debug("Estado antes de enviar:", this.chatController);
      console.debug("Query actual:", this.query);
      await this.sendQuery();
      console.debug("Estado después de enviar:", this.chatController);
    },
  },
};
</script>
  <style>
</style>