<template>
  <div class="nav-bar">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="item in nav_bar_list" :key="item">{{ $t(`menu.${item}`) }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import { Breadcrumb } from "ant-design-vue";
export default {
  name: "navBar",
  components: {
    "a-breadcrumb": Breadcrumb,
    "a-breadcrumb-item": Breadcrumb.Item
  },
  data() {
    return {
      nav_bar_list: []
    };
  },
  mounted() {
    let pathArr = this.$route.path.split("/");
    this.nav_bar_list = pathArr.filter(item => item);
  },
  methods: {}
};
</script>

<style scoped>
.nav-bar {
  margin-bottom: 10px;
}
</style>
