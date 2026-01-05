<script setup lang="ts">
import {ref} from "vue";
import {DynamicForm, type dynamicFormRef} from "dynamicformdjx";
// 依赖于naive-ui
import {NaiveUiDynamicForm} from "dynamicformdjx/naiveUi";
// 依赖于element-plus
import {ElementPlusDynamicForm} from "dynamicformdjx/elementPlus";

const test = ref<{ a: string, b: number, c: number[] }>({
  a: 'Hello world',
  b: 1314,
  c: [5, 2, 0]
})
const test2 = ref<{ d: number[] }>({
  d: [6, 6, 6]
})
const test3 = ref<{ e: string }>({
  e: "victory"
})
const dyRef=ref<dynamicFormRef|null>(null)
const setD = () => {
  dyRef.value?.onSet?.({test:"helloWorld"})
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
    <p>Base on NaiveUi</p>
    <naive-ui-dynamic-form v-model="test2"
                           is-controller
    />
    <pre>{{ test2 }}</pre>
    <p>Base on element plus</p>
    <element-plus-dynamic-form v-model="test3"
                               :dy-list-configs="{arraySplitSymbol:'-'}"
    />
    <pre>{{ test3 }}</pre>
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
