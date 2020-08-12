<template>
  <div style="width: 100%">
    <div class="logo" />
    <a-menu
      :default-selected-keys="['1']"
      :open-keys="openKeys"
      :selected-keys="[$route.name]"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @click="handleMenuClick"
      @openChange="handleOpenChange"
    >
      <template v-for="item in menu_list">
        <a-sub-menu :key="item.view" v-if="item.children.length">
          <span slot="title">
            <span>{{ $t(`menu.${item.view}`) }}</span>
          </span>
          <template v-for="elem in item.children">
            <a-menu-item :key="elem.view">{{$t(`menu.${elem.view}`)}}</a-menu-item>
          </template>
        </a-sub-menu>
        <a-menu-item :key="item.view" v-else>
          <span>{{ $t(`menu.${item.view}`) }}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { Menu } from "ant-design-vue";
import { mapState } from "vuex";

export default {
  name: "Sidebar",
  props: ["collapsed"],
  components: {
    "a-menu": Menu,
    "a-sub-menu": Menu.SubMenu,
    "a-menu-item": Menu.Item
  },
  computed: {
    ...mapState(["menu_list"])
  },
  data() {
    return {
      openKeys: []
    };
  },
  mounted() {
    this.handleMenuOpenedKeys();
  },
  methods: {
    handleMenuOpenedKeys() {
      this.openKeys = [
        this.$route.path.replace(/[^/]+(?!.*\/)/, "").replace(/\//g, "")
      ];
    },
    handleOpenChange(openKeys) {
      let keys;
      if (openKeys.length > 1) {
        if (openKeys.length > 2) {
          keys = [openKeys[openKeys.length - 1]];
        } else if (openKeys[1].indexOf(openKeys[0]) > -1) {
          keys = [openKeys[0], openKeys[1]];
        } else {
          keys = [openKeys[openKeys.length - 1]];
        }
        this.openKeys = keys;
      } else {
        this.openKeys = openKeys;
      }
    },
    handleMenuClick(route) {
      if (route.key === this.$route.name) return;
      this.$router.push({ name: route.key });
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

<style>
.ant-menu-dark.ant-menu-inline .ant-menu-item,
.ant-menu-dark.ant-menu-inline .ant-menu-submenu-title {
  font-size: 13px;
}
</style>
