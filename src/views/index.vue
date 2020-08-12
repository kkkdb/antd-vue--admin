<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <sidebar :collapsed="collapsed"></sidebar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <topbar :collapsed="collapsed" @changeCollapsed="changeCollapsed"></topbar>
      </a-layout-header>
      <a-layout-content :style="{
          margin: '16px'
        }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { Layout } from "ant-design-vue";
import sidebar from "@components/sidebar";
import topbar from "@components/topbar";
export default {
  components: {
    sidebar,
    topbar,
    "a-layout": Layout,
    "a-layout-sider": Layout.Sider,
    "a-layout-header": Layout.Header,
    "a-layout-content": Layout.Content
  },
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>
<style lang="scss" scoped>
#components-layout-demo-custom-trigger {
  height: 100%;
}
</style>
