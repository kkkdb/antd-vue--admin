<template>
  <a-dropdown>
    <div class="menu-icon">
      <span>
        <a-icon type="global" class="menu-icon-item" />
      </span>
    </div>
    <a-menu slot="overlay" @click="changeLang">
      <a-menu-item key="zh-cn">
        <span rel="noopener noreferrer">中文</span>
      </a-menu-item>
      <a-menu-item key="en">
        <span rel="noopener noreferrer">English</span>
      </a-menu-item>
      <a-menu-item key="th">
        <span rel="noopener noreferrer">ภาษาไทย</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { Dropdown, Menu, Icon } from "ant-design-vue";
export default {
  components: {
    "a-icon": Icon,
    "a-dropdown": Dropdown,
    "a-menu-item": Menu.Item,
    "a-menu": Menu
  },
  methods: {
    changeLang(item) {
      const key = item.key;
      this.$bus.$emit("change-lang", key);
    }
  }
};
</script>
