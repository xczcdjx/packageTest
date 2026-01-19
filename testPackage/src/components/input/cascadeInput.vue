<script setup lang="ts">
import {ref} from "vue";
import {NaiDynamicCascadeInput} from "dynamicformdjx/naiveUi";

const test2 = ref({
  a: 'Hello world',
  b: 1314,
  c: [5, 2, 0]
})
</script>

<template>
  <p>Cascade dynamicForm</p>
  <nai-dynamic-cascade-input v-model="test2" is-controller/>
  <pre>{{ test2 }}</pre>
</template>

<style scoped>
.app {
  padding: 20px;
}
</style>
