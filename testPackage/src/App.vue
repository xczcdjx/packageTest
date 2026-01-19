<template>
  <div class="box">
    <!--    <test/>-->
        <single-input/>
        <cascade-input/>
    <!--    <simple-dy-form-test/>-->
    <!--    <custom-dy-form-test/>-->
    <!--    <decorate-dy-form-test/>-->
    <!--    <ele-decorate-dy-form-test/>-->
    <!--    <ele-simple-dynamic-form-test/>-->
    <n-message-provider>
      <!--      <nai-table/>-->
      <!--      <nai-origin-table/>-->
<!--      <nai-zeal-table/>-->
    </n-message-provider>
    <!--    <ele-table/>-->
    <!--    <ele-dynamic-form/>-->
<!--    <ele-custom-dy-form-test/> <br/>-->
<!--    <ele-decorate-dy-form-test/>-->
<!--    <ele-zeal-table/>-->
  </div>
</template>

<script setup lang="ts">

// import Test from "./components/test.vue";
import SingleInput from "./components/input/singleInput.vue";
import CascadeInput from "@/components/input/cascadeInput.vue";
import SimpleDyFormTest from "./components/simpleDyFormTest.vue";
import CustomDyFormTest from "./components/customDyFormTest.vue";
import DecorateDyFormTest from "./components/decorateDyFormTest.vue";
import EleDecorateDyFormTest from "./components/elementPlus/eleDecorateDyFormTest.vue";
import EleSimpleDynamicFormTest from "./components/eleSimpleDynamicFormTest.vue";
import NaiTable from "@/components/final/naiTable.vue";
import EleTable from "@/components/final/eleTable.vue";
import NaiOriginTable from "@/components/final/naiOriginTable.vue";
import EleDynamicForm from "@/components/eleDynamicForm.vue";
import EleCustomDyFormTest from "@/components/elementPlus/eleCustomDyFormTest.vue";
import NaiZealTable from "@/components/final/naiZealTable.vue";
import EleZealTable from "@/components/final/eleZealTable.vue";
</script>

<style scoped>
.box {
  padding: 20px;
}
</style>