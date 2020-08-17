<template>
  <div class="content order-entry">
    <a-tabs default-active-key="1" type="card">
      <a-tab-pane key="1" tab="复制订单">
        <copyOrder></copyOrder>
      </a-tab-pane>
      <a-tab-pane key="2" tab="单个录单">
        <singleEntry></singleEntry>
      </a-tab-pane>
      <a-tab-pane key="3" tab="批量导入">
        <batchEntry></batchEntry>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import copyOrder from "./children/copyOrder";
import singleEntry from "./children/singleEntry";
import batchEntry from "./children/batchEntry";
export default {
  name: "orderEntry",
  components: {
    copyOrder,
    singleEntry,
    batchEntry
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.order-entry {
  background: #f0f2f5;
  overflow: hidden;
  .ant-tabs-card > .ant-tabs-content {
    margin-top: -16px;
  }
  .ant-tabs-card > .ant-tabs-bar {
    border-color: #fff;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    border-color: transparent;
    background: transparent;
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
    border-color: #fff;
    background: #fff;
  }
}
</style>
