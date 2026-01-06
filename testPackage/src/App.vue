<template>
  <div class="box">
<!--    <test/>-->
<!--    <single-form/>-->
<!--    <cascade-form/>-->
<!--    <simple-dy-form-test/>-->
<!--    <custom-dy-form-test/>-->
<!--    <decorate-dy-form-test/>-->
<!--    <ele-decorate-dy-form-test/>-->
<!--    <ele-simple-dynamic-form-test/>-->
    <n-message-provider>
      <nai-table/>
      <nai-origin-table/>
    </n-message-provider>&nbsp;
    <ele-table/>
  </div>
</template>

<script setup lang="ts">

// import Test from "./components/test.vue";
/*import SingleForm from "./components/singleForm.vue";
import SimpleDyFormTest from "./components/simpleDyFormTest.vue";
import CustomDyFormTest from "./components/customDyFormTest.vue";*/
import DecorateDyFormTest from "./components/decorateDyFormTest.vue";
import EleDecorateDyFormTest from "./components/eleDecorateDyFormTest.vue";
import EleSimpleDynamicFormTest from "./components/eleSimpleDynamicFormTest.vue";
import NaiTable from "@/components/final/naiTable.vue";
import EleTable from "@/components/final/eleTable.vue";
import NaiOriginTable from "@/components/final/naiOriginTable.vue";
// import CascadeForm from "./components/cascadeForm.vue";
</script>

<style scoped>
.box{
  padding: 20px;
}
</style>