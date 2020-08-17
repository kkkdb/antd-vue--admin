<template>
  <div class="topbar">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="changeCollapsed"
    />
    <ul class="menu">
      <li class="user">
        <user-menu />
      </li>
      <li class="lang">
        <lang-menu />
      </li>
    </ul>
  </div>
</template>

<script>
import langMenu from "./children/lang";
import userMenu from "./children/user";
export default {
  name: "Topbar",
  props: ["collapsed"],
  components: {
    "lang-menu": langMenu,
    "user-menu": userMenu
  },
  methods: {
    changeCollapsed() {
      this.$emit("changeCollapsed");
    }
  }
};
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  height: 50px;
  background: #fff;
  display: flex;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  justify-content: space-between;
  .trigger {
    font-size: 18px;
    line-height: 50px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .menu {
    display: flex;
    text-align: center;
    font-size: 14px;
    align-items: center;
    .user {
      min-width: 100px;
    }
    .lang {
      width: 50px;
    }
  }
}
</style>
