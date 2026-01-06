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
    </n-message-provider>
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
// import CascadeForm from "./components/cascadeForm.vue";
</script>

<style scoped>
.box{
  padding: 20px;
}
</style>