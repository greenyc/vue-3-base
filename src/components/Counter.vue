<script lang="ts">
import { useCounterStore } from "../stores/counter";
import { computed } from "vue";

export default {
  setup() {
    const counter = useCounterStore();
    const count = computed(() => counter.count);

    function incrementCounter() {
      counter.increment();
    }

    return {
      count: count,
      incrementCounter: incrementCounter,
    };
  },
};
</script>

<template>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="incrementCounter()">
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style lang="scss" scoped>
a {
  color: $default-color-01;
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
