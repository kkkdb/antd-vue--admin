<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <sidebar :collapsed="collapsed"></sidebar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;height:90px;">
        <topbar :collapsed="collapsed" @changeCollapsed="changeCollapsed"></topbar>
        <aliveTab></aliveTab>
      </a-layout-header>
      <a-layout-content :style="{ margin: '10px 16px 16px 16px' }">
        <keep-alive :exclude="excludename">
          <router-view v-if="isRouterAlive"></router-view>
        </keep-alive>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { Layout } from "ant-design-vue";
import sidebar from "@components/sideBar/sidebar";
import aliveTab from "@components/topBar/aliveTab";
import topbar from "@components/topBar/topbar";
export default {
  components: {
    sidebar,
    topbar,
    aliveTab,
    "a-layout": Layout,
    "a-layout-sider": Layout.Sider,
    "a-layout-header": Layout.Header,
    "a-layout-content": Layout.Content
  },
  computed: {
    ...mapState(["exclude"])
  },
  data() {
    return {
      excludename: "",
      collapsed: false,
      isRouterAlive: true
    };
  },
  methods: {
    ...mapMutations(["setState"]),
    changeCollapsed() {
      this.collapsed = !this.collapsed;
    },
    reload(newVal) {
      this.isRouterAlive = false;
      this.excludename = newVal;
      this.$nextTick(() => {
        this.excludename = null;
        this.setState({
          exclude: null
        });
        this.isRouterAlive = true;
      });
    }
  },
  watch: {
    exclude(newVal) {
      if (newVal) {
        this.reload(newVal);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#components-layout-demo-custom-trigger {
  height: 100%;
}
</style>
