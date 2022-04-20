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

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
