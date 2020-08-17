<template>
  <div class="single-entry">
    <div class="form-content">
      <a-form-model layout="inline" ref="ruleForm" :model="form" :wrapper-col="wrapperCol">
        <a-row :gutter="[10, 4]" type="flex">
          <a-col :span="8">
            <a-form-model-item ref="name">
              <a-input v-model="form.name" placeholder="原始订单号" />
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
              <a-input v-model="form.desc" placeholder="选择店铺" />
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-input v-model="form.desc" placeholder="商品名称" />
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-select style="width: 100%" v-model="form.province">
                <a-select-option v-for="province in provinceData" :key="province">{{ province }}</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-select v-model="form.city" style="width: 100%">
                <a-select-option v-for="city in cities" :key="city">{{ city }}</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="4">
            <a-form-model-item>
              <a-select v-model="form.district" style="width: 100%">
                <a-select-option v-for="district in districts" :key="district">{{ district }}</a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :span="4"></a-col>
          <a-col :span="12">
            <a-form-model-item>
              <a-input v-model="form.region" type="textarea" placeholder="详细地址" />
            </a-form-model-item>
          </a-col>
          <a-col :span="8"></a-col>
          <a-col :span="24">
            <a-form-model-item>
              <a-button type="primary" @click="onSubmit">创建</a-button>
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>
    </div>
    <orderTable :table_data="table_data"></orderTable>
  </div>
</template>

<script>
import orderTable from "./orderTable";
const provinceData = ["浙江", "江苏"];
const cityData = {
  浙江: ["杭州", "宁波", "温州"],
  江苏: ["南京", "苏州", "镇江"]
};
const districtData = {
  杭州: ["萧山区", "滨江区"],
  宁波: ["海曙区", "江北区"],
  温州: ["萧山区", "滨江区"],
  南京: ["海曙区", "江北区"],
  苏州: ["萧山区", "滨江区"],
  镇江: ["海曙区", "江北区"]
};
export default {
  name: "singleEntry",
  components: {
    orderTable
  },
  data() {
    return {
      wrapperCol: { span: 24 },
      form: {
        name: "",
        region: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        order_status: [],
        note: 0,
        province: "",
        city: "",
        district: ""
      },
      cities: [],
      districts: [],
      provinceData,
      cityData,
      districtData,
      table_data: []
    };
  },
  methods: {
    handleProvinceChange(value) {
      this.cities = this.cityData[value];
      this.form.city = this.cities[0];
    },
    handleCityChange(value) {
      this.districts = this.districtData[value];
      this.form.district = this.districts[0];
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
    }
  },
  watch: {
    "form.province"(newVal) {
      this.handleProvinceChange(newVal);
    },
    "form.city"(newVal) {
      this.handleCityChange(newVal);
    }
  }
};
</script>
