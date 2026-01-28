<script setup lang="ts">
import {useObserverSize} from "dynamicformdjx";
import {ElCard} from "element-plus";

const {wrapRef, cardRef, restRef, tableHeight} = useObserverSize(ElCard)
</script>

<template>
  <div class="container" ref="wrapRef">
    <el-card ref="cardRef">
      <template #header>
        useObserverSize Test
      </template>
      <div class="content" :style="{
        height:tableHeight+'px'
      }">
        <p>tableHeight {{ tableHeight }} 高度</p>
      </div>
    </el-card>
    <div class="rest" ref="restRef"></div>
  </div>
</template>

<style scoped>
.container {
  height: calc(100vh - 40px);
}
</style>