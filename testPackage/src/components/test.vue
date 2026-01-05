<template>
  <form-design
      :element-list="[]"
      :form-config="formParams"
      file-upload-url=""
      file-download-url=""
      @save="save"
  >
    <template #title>
      <div align="center">这是插槽标题</div>
    </template>
  </form-design>
</template>
<script>
export default {
  methods: {
    // 保存表单参数
    save(data) {
      console.log(data);
    },
  },
};
</script>