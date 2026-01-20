<script setup lang="ts">
import {NaiZealTablePaginationControl} from 'dynamicformdjx/naiveUi'
import {usePagination, useWindowSize} from "dynamicformdjx";
import {onMounted} from "vue";

const {isMobile} = useWindowSize()
const pagination = usePagination(fetchData)

function fetchData() {
  console.log(pagination.pageNo, pagination.pageSize)
}

onMounted(() => {
  pagination.total = 52
})
</script>

<template>
  <NaiZealTablePaginationControl :pagination="pagination" :isMobile="isMobile">
    <template #prefix="{ itemCount }">
      <span>Total {{ itemCount }}</span>
    </template>
  </NaiZealTablePaginationControl>
</template>