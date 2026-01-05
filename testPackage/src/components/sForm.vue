<script setup lang="ts">
import {ref} from "vue";
import {DynamicForm, type dynamicFormRef} from "dynamicformdjx";
const test = ref<{ a: string, b: number, c: number[] }>({
  a: 'Hello world',
  b: 1314,
  c: [5, 2, 0]
})
const dyRef=ref<dynamicFormRef>()
const setD = () => {
  dyRef.value?.onSet({test:"helloWorld"})
}
</script>

<template>
  <div>
    <p>Base</p>
    <DynamicForm v-model="test" ref="dyRef"/>
    <pre>{{ test }}</pre>
    <div>
      <button @click="setD">setD</button>
    </div>
  </div>
</template>

<style scoped>
p {
  text-align: left;
  font-size: 25px;
  font-weight: bold;
}

pre {
  text-align: left;
}
</style>