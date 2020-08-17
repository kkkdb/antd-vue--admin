<template>
  <div class="copy-order">
    <div class="form-content">
      <a-form-model layout="inline">
        <a-form-model-item label="订单号">
          <a-input style="width: 300px;" placeholder="输入订单号"></a-input>
        </a-form-model-item>
      </a-form-model>
    </div>
    <orderTable :table_data="table_data"></orderTable>
  </div>
</template>

<script>
import orderTable from "./orderTable";
export default {
  name: "copyOrder",
  components: {
    orderTable
  },
  data() {
    return {
      table_data: []
    };
  },
  methods: {}
};
</script>
