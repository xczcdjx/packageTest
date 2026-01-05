<script>
import {DynamicInput} from "dynamicformdjx-vue2";

export default {
  name: "singleData",
  components: {DynamicInput},
  data(){
    return {
      dyRef:null,
      obj: {
        a: 'Hello world',
        b: 1314,
        c: [5, 2, 0]
      },
    }
  },
  methods: {
    setData(){
      this.$refs.dyRef.onSet({test: "helloWorld"})
    }
  }
}
</script>

<template>
  <div>
    <DynamicInput v-model="obj" ref="dyRef" is-controller/>
    <pre>{{JSON.stringify(obj,null,2)}}</pre>
    <button @click="setData">setData helloWorld</button>
  </div>
</template>

<style scoped>

</style>
