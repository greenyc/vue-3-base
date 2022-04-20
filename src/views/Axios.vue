<script setup lang="ts">
import ExampleCall from "../components/ExampleCall.vue";
</script>

<template>
  <Suspense><ExampleCall /><template #fallback>...</template></Suspense>
</template>
