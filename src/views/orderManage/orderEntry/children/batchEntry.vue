<template>
  <div class="batch-entry">
    <div class="form-content">
      <div class="upload-content">
        <a-upload-dragger
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          @change="handleChange"
        >
          <p class="ant-upload-drag-icon">
            <a-icon type="cloud-upload" />
          </p>
          <p class="ant-upload-text">Click or drag file to this area to upload</p>
          <p class="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </a-upload-dragger>
      </div>
    </div>
    <orderTable :table_data="table_data"></orderTable>
  </div>
</template>

<script>
import orderTable from "./orderTable";
export default {
  name: "batchEntry",
  components: {
    orderTable
  },
  data() {
    return {
      table_data: []
    };
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    }
  }
};
</script>

<style lang="scss">
.upload-content {
  margin: 0 auto;
  width: 360px;
  height: 200px;
  .ant-upload {
    background: #fff;
  }
}
</style>
