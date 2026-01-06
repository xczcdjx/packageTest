<template>
  <n-card>
    <template #header>
      <div class="title">Nai Form Table Test</div>

      <div class="search">
        <n-form :model="searchModel" label-placement="left" label-width="auto">
          <n-grid :cols="24">
            <n-form-item-gi label="Name" :span="6">
              <n-input v-model:value="searchModel.name" clearable/>
            </n-form-item-gi>

            <n-form-item-gi label="Age" :span="6">
              <n-input
                  v-model:value="searchModel.age"
                  clearable
              />
            </n-form-item-gi>
          </n-grid>
        </n-form>
        <div class="searchBtn">
          <n-button type="info" size="small" @click="doSearch">Search</n-button>
          <n-button size="small" @click="doReset">Reset</n-button>
        </div>
      </div>

      <div class="controlBtn">
        <n-button type="success" size="small" @click="addItem">Add</n-button>
      </div>
    </template>

    <n-data-table
        :single-line="false"
        :columns="columns"
        :data="pagedData"
        :loading="tableLoading"
    />

    <template #footer>
      <div class="pagination">
        <n-pagination
            v-model:page="pageModal.pageNo"
            v-model:page-size="pageModal.pageSize"
            :item-count="tableData.length"
            :page-sizes="[10, 20, 50]"
            show-quick-jumper
            show-size-picker
        >
          <template #prefix="{ itemCount }"> Total {{ itemCount }}</template>
        </n-pagination>
      </div>
    </template>
  </n-card>

  <div class="update">
    <n-modal
        v-model:show="showModal"
        :title="referId === -1 ? 'add Item' : 'update Item'"
        preset="card"
        draggable
        :style="{ width: '70%' }"
    >
      <n-form
          ref="handleFormRef"
          :model="handleModel"
          :rules="handleRules"
          label-placement="left"
          label-width="auto"
      >
        <n-form-item label="Name" path="name">
          <n-input v-model:value="handleModel.name" placeholder="Name"/>
        </n-form-item>

        <n-form-item label="Age" path="age">
          <n-input-number v-model:value="handleModel.age" clearable :min="0" placeholder="Age"/>
        </n-form-item>

        <n-form-item label="Address" path="address">
          <n-input
              v-model:value="handleModel.address"
              type="textarea"
              :rows="2"
              clearable
              placeholder="Address"
          />
        </n-form-item>

        <n-form-item label="Tags" path="tags">
          <n-select
              v-model:value="handleModel.tags"
              multiple
              clearable
              filterable
              :options="tagsOptions"
              placeholder="Tags"
          />
        </n-form-item>
      </n-form>

      <template #footer>
        <div class="fControlBtn">
          <n-button size="small" @click="formCancel">Cancel</n-button>
          <n-button type="info" size="small" @click="formSubmit">Submit</n-button>
        </div>
      </template>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import {type DataTableColumns, NSpace, NButton, NTag, useMessage} from 'naive-ui'
import {computed, h, nextTick, onMounted, reactive, ref} from 'vue'

const message = useMessage()

interface RowData {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

type PageModal = {
  pageSize: number
  pageNo: number
}

const data: RowData[] = [
  {key: 0, name: 'John Brown', age: 12, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer']},
  {key: 1, name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['wow']},
  {key: 2, name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher']}
]

const columns: DataTableColumns<RowData> = [
  {title: 'Name', key: 'name'},
  {title: 'Age', key: 'age'},
  {title: 'Address', key: 'address'},
  {
    title: 'Tags',
    key: 'tags',
    render(row) {
      if (!row.tags || row.tags.length === 0) return h('div', {}, '-')
      return row.tags.map(tagKey =>
          h(
              NTag,
              {style: {marginRight: '6px'}, type: 'info', bordered: false},
              {default: () => tagKey}
          )
      )
    }
  },
  {
    title: 'Action',
    key: 'actions',
    render(row) {
      return h(NSpace, {}, [
        h(NButton, {size: 'small', onClick: () => upItem(row)}, {default: () => 'update'}),
        h(NButton, {size: 'small', type: 'error', onClick: () => delItem(row)}, {default: () => 'delete'})
      ])
    }
  }
]

const tableData = ref<RowData[]>([])
const tableLoading = ref(false)

const pageModal = reactive<PageModal>({pageNo: 1, pageSize: 10})
const pagedData = computed(() => {
  const {pageNo, pageSize} = pageModal
  const start = (pageNo - 1) * pageSize
  return tableData.value.slice(start, start + pageSize)
})

/** Search form (raw naive-ui) */
const searchModel = reactive<{ name: string; age: number | null }>({
  name: '',
  age: null
})

/** Modal form (raw naive-ui) */
const showModal = ref(false)
const referId = ref<number>(-1)
const handleFormRef = ref<any>(null)
const handleModel = reactive<{ name: string; age: number | null; address: string; tags: string[] }>({
  name: '',
  age: null,
  address: '',
  tags: []
})

const handleRules = {
  name: {required: true, trigger: ['input', 'blur'], message: 'Name is required'}
}

const tagsOptions = computed(() => {
  const set = new Set<string>()
  tableData.value.forEach(r => (r.tags || []).forEach(t => set.add(t)))
  return Array.from(set).map(t => ({label: t, value: t}))
})

const doSearch = () => {
  const {name, age} = searchModel
  message.info(JSON.stringify({name, age}))

  const hasCond = (name && name.trim().length > 0) || age !== null
  tableData.value = tableData.value.filter(it => {
    if (!hasCond) return true
    const byName = name ? it.name.includes(name) : false
    const byAge = age !== null ? it.age === age : false
    return byName || byAge
  })

  pageModal.pageNo = 1
}

const doReset = () => {
  searchModel.name = ''
  searchModel.age = null
  tableData.value = [...data]
  pageModal.pageNo = 1
}

const addItem = () => {
  referId.value = -1
  handleModel.name = ''
  handleModel.age = null
  handleModel.address = ''
  handleModel.tags = []

  nextTick(() => {
    showModal.value = true
  })
}

function upItem(it: RowData) {
  referId.value = it.key
  handleModel.name = it.name
  handleModel.age = it.age
  handleModel.address = it.address
  handleModel.tags = [...(it.tags || [])]

  nextTick(() => {
    showModal.value = true
  })
}

function delItem(it: RowData) {
  tableData.value = tableData.value.filter(it2 => it2.key !== it.key)
  message.success('delete successful')
}

function formCancel() {
  message.warning('cancel')
  showModal.value = false
}

async function formSubmit() {
  try {
    await handleFormRef.value?.validate()

    if (referId.value === -1) {
      tableData.value.push({
        key: Date.now(),
        name: handleModel.name,
        age: handleModel.age ?? 0,
        address: handleModel.address,
        tags: [...handleModel.tags]
      })
      message.success('Add successful')
    } else {
      tableData.value = tableData.value.map(it => {
        if (it.key !== referId.value) return it
        return {
          ...it,
          name: handleModel.name,
          age: handleModel.age ?? 0,
          address: handleModel.address,
          tags: [...handleModel.tags]
        }
      })
      message.success('Update successful')
    }

    nextTick(() => {
      showModal.value = false
    })
  } catch {
    // validate failed (naive-ui throws)
  }
}

async function fetchData() {
  tableLoading.value = true
  const res = await new Promise<RowData[]>(resolve => setTimeout(() => resolve(data), 1000))
  tableData.value = [...res]
  tableLoading.value = false
}

onMounted(fetchData)
</script>

<style scoped>
.title {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

.search {
  margin: 10px 0;
}

.pagination {
  display: flex;
  justify-content: center;
}

.search .searchBtn {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.fControlBtn {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
