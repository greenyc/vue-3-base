<script lang="ts">
import axios from "axios";

export default {
  async setup() {
    const facts = await axios.get("https://cat-fact.herokuapp.com/facts");

    return {
      facts: facts,
    };
  },
};
</script>

<template>
  <p v-for="fact in facts.data">{{ fact.text }}</p>
</template>

<style scoped></style>
