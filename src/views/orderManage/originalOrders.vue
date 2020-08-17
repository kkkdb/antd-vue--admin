<template>
  <div class="content original-orders">
    <navBar />
    <div class="operation-content">
      <a-button type="primary">
        <navLink to="orderEntry">
          <a-icon type="plus"></a-icon>订单录入
        </navLink>
      </a-button>
      <a-button type="primary">
        <a-icon type="download"></a-icon>导出
      </a-button>
    </div>
    <div class="form-content">
      <a-form-model layout="inline" ref="ruleForm" :model="form" :wrapper-col="wrapperCol">
        <a-row :gutter="10" type="flex">
          <a-col :span="12">
            <a-form-model-item ref="name">
              <!-- <a-input v-model="form.name" placeholder="原始订单号／OMS订单号／快递面单号，多个用“逗号,”分隔" /> -->
              <a-select
                mode="tags"
                style="width: 100%"
                placeholder="原始订单号/OMS订单号/快递面单号"
                :token-separators="[',']"
                v-model="form.name"
                :filter-option="false"
                :not-found-content="null"
              ></a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="6">
            <a-form-model-item>
              <a-button type="primary" @click="onSubmit">搜索</a-button>
              <a-button type="primary" @click="onSubmit">常用条件</a-button>
              <a-button @click="resetForm">Reset</a-button>
            </a-form-model-item>
          </a-col>
          <a-col :span="6"></a-col>
          <a-col :span="6">
            <a-form-model-item required>
              <a-range-picker
                v-model="form.date1"
                style="width: 100%;"
                @change="onChange"
                :placeholder="['订单开始时间', '订单结束时间']"
              />
            </a-form-model-item>
          </a-col>
          <a-col :span="6">
            <a-form-model-item required>
              <a-range-picker
                v-model="form.date2"
                style="width: 100%;"
                @change="onChange2"
                :placeholder="['签收开始时间', '签收结束时间']"
              />
            </a-form-model-item>
          </a-col>
          <a-col :span="8">
            <a-form-model-item required>
              <a-range-picker
                v-model="form.date3"
                style="width: 100%;"
                @change="onChange3"
                :placeholder="['付款开始时间', '付款结束时间']"
              />
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-input v-model="form.desc" placeholder="支付方式" />
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-input v-model="form.desc" placeholder="商家编码" />
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-input v-model="form.desc" placeholder="宝贝名称" />
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-input v-model="form.desc" placeholder="收件人" />
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-input v-model="form.desc" placeholder="手机号" />
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-input v-model="form.desc" placeholder="用户ID" />
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-select
                style="width: 100%;"
                v-model="form.order_status"
                placeholder="订单状态"
                :dropdown-match-select-width="false"
                mode="tags"
              >
                <a-select-option value="0">待发货</a-select-option>
                <a-select-option value="1">已发货</a-select-option>
                <a-select-option value="2">已签收</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-select style="width: 100%;" v-model="form.note">
                <a-select-option :value="0">无备注</a-select-option>
                <a-select-option :value="1">全部备注</a-select-option>
                <a-select-option :value="2">顾客备注</a-select-option>
                <a-select-option :value="3">小二备注</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-input v-model="form.desc" placeholder="备注内容" />
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-input v-model="form.desc" placeholder="仓库" />
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-input v-model="form.desc" placeholder="快递" />
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>
    </div>
    <div class="table-content">
      <div class="table-header">
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="全部"></a-tab-pane>
          <a-tab-pane key="2">
            <span slot="tab">转化失败</span>
          </a-tab-pane>
          <a-tab-pane key="3">
            <span slot="tab">回传失败</span>
          </a-tab-pane>
          <a-tab-pane key="4" tab="未回传"></a-tab-pane>
        </a-tabs>
      </div>
      <div class="table-body">
        <a-table
          rowKey="name"
          size="small"
          :columns="columns"
          :data-source="table_data"
          :expandIconAsCell="false"
          :expandIconColumnIndex="-1"
          :expandRowByClick="true"
          @expandedRowsChange="expandedRowsChange"
          :pagination="pagination_setting"
        >
          <div slot="name" slot-scope="text">
            <span>{{ text }}</span>
            <div class="text-info">
              <span v-if="expandedRows.includes(text)">
                收起
                <a-icon type="up" />
              </span>
              <span v-else>
                宝贝
                <a-icon type="down" />
              </span>
            </div>
          </div>
          <a-table
            rowKey="name2"
            slot="expandedRowRender"
            slot-scope="record"
            :pagination="false"
            :columns="columns2"
            size="small"
            :data-source="[record.children]"
          ></a-table>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@components/navBar";
import navLink from "@components/navBar/navLink";
import { mapState } from "vuex";
export default {
  name: "originalOrders",
  components: {
    navBar,
    navLink
  },
  computed: {
    ...mapState(["pagination_setting"])
  },
  data() {
    return {
      wrapperCol: { span: 24 },
      form: {
        name: [],
        region: undefined,
        date1: undefined,
        date2: undefined,
        date3: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        order_status: [],
        note: 0
      },
      expandedRows: [],
      table_data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "111",
          description: "111222334",
          children: {
            code: 111,
            num: 1,
            num2: 12,
            name2: "宝贝名称1"
          }
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "222",
          description: "22321324",
          children: {
            code: 222,
            num: 2,
            num2: 22,
            name2: "宝贝名称2"
          }
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "333",
          description: "125124112412",
          children: {
            code: 333,
            num: 3,
            num2: 32,
            name2: "宝贝名称3"
          }
        }
      ],
      columns: [
        {
          dataIndex: "name",
          key: "name",
          title: "原始订单号",
          scopedSlots: { customRender: "name" },
          width: 300
        },
        {
          title: "收件人信息",
          dataIndex: "age",
          key: "age",
          width: 300
        },
        {
          title: "店铺",
          dataIndex: "address",
          key: "address1"
        },
        {
          title: "应收金额THB",
          dataIndex: "address",
          key: "address2"
        },
        {
          title: "OMS订单号",
          dataIndex: "address",
          key: "address3"
        },
        {
          title: "状态",
          dataIndex: "address",
          key: "address4"
        },
        {
          title: "订单金额/订单时间",
          dataIndex: "address",
          key: "address5"
        },
        {
          title: "仓库/快递",
          dataIndex: "address",
          key: "address6"
        }
      ],
      columns2: [
        {
          title: "商家编码",
          dataIndex: "code",
          key: "code"
        },
        {
          title: "数量",
          dataIndex: "num",
          key: "num"
        },
        {
          title: "子订单分摊",
          dataIndex: "num2",
          key: "num2"
        },
        {
          title: "宝贝名称",
          dataIndex: "name2",
          key: "name2"
        }
      ]
    };
  },
  mounted() {
    console.log("original mounted");
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    onChange2(date, dateString) {
      console.log(date, dateString);
    },
    onChange3(date, dateString) {
      console.log(date, dateString);
    },
    expandedRowsChange(expandedRows) {
      this.expandedRows = expandedRows;
    },
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.text-info {
  cursor: pointer;
}
</style>
