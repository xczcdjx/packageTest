<script>
import {DynamicCascadeInput} from "dynamicformdjx-vue2";

export default {
  name: "App",
  components: {DynamicCascadeInput},
  data(){
    return {
      dyRef:null,
      obj: {
        a: {
          b: {
            c: {
              d: {
                e: "hello world"
              }
            }
          }
        },
        aa: [5, 2, 0],
        aaa: 1314
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
    <DynamicCascadeInput v-model="obj" ref="dyRef" is-controller/>
    <pre>{{JSON.stringify(obj,null,2)}}</pre>
    <button @click="setData">setData helloWorld</button>
  </div>
</template>
