<template>
  <div class="table-content">
    <a-table rowKey="index" size="small" :columns="columns" :data-source="table_data"></a-table>
  </div>
</template>

<script>
export default {
  props: ["table_data"],
  data() {
    return {
      columns: [
        {
          title: "商品信息",
          dataIndex: "goods_info",
          key: "goods_info"
        },
        {
          title: "收件人信息",
          dataIndex: "user",
          key: "user",
          width: 300
        },
        {
          title: "留言",
          dataIndex: "mark",
          key: "mark"
        },
        {
          title: "快递面单",
          dataIndex: "express",
          key: "express"
        },
        {
          title: "状态",
          dataIndex: "status",
          key: "status"
        }
      ]
    };
  },
  methods: {}
};
</script>
