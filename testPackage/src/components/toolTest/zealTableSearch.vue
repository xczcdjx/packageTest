<script setup lang="ts">
import {ref} from 'vue'
import {NaiZealTableSearch, useDecorateForm, type naiZealTableSearchRef} from 'dynamicformdjx/naiveUi'
import {useWindowSize} from "dynamicformdjx";

const {isMobile} = useWindowSize()
const searchRef = ref<naiZealTableSearchRef | null>(null)

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

const searchFormItems = useDecorateForm<RowData>([
  {
    key: "name",
    label: "Name",
  },
  {
    key: "age",
    label: "Age",
  },
  {
    key: "address",
    label: "Address",
  },
].map(it => ({
  value: null,
  clearable: true,
  renderType: 'renderInput',
  span: 8,
  ...it,
})) as any[])
const onSearch = (params: any) => {
  console.log('search params:', params)
}

const onReset = () => {
  console.log('reset')
}
</script>

<template>
  <nai-zeal-table-search
      ref="searchRef"
      title="Search"
      :isMobile="isMobile"
      :searchItems="searchFormItems"
      @onSearch="onSearch"
      @onReset="onReset"
  />

  <!-- 外部主动触发查询 -->
  <n-button size="small" @click="searchRef?.onSearch?.()">Search (Expose)</n-button>
</template>