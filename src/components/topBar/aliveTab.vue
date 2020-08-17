<template>
  <div class="alive-tab">
    <div class="operate-content">
      <a-dropdown placement="bottomRight">
        <a-icon class="close-circle" type="close-circle" />
        <a-menu slot="overlay">
          <a-menu-item>
            <span class="menu-text" @click="closeTab(1)">关闭所有</span>
          </a-menu-item>
          <a-menu-item>
            <span class="menu-text" @click="closeTab(0)">关闭其他</span>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <a-tabs v-model="activeKey" hide-add type="editable-card" @edit="onEdit" @tabClick="tabClick">
      <a-tab-pane v-for="pane in panes" :key="pane">
        <div slot="tab" class="tab-item">
          <div class="icon-active" v-if="activeKey === pane" @click="reloadHandle(pane)">
            <div class="circle">
              <a-icon class="icon reload" type="reload" />
            </div>
          </div>
          <div class="circle" v-else></div>
          <span>{{ $t(`menu.${pane}`) }}</span>
          <a-icon class="icon close" type="close" @click.stop="remove(pane)"></a-icon>
        </div>
      </a-tab-pane>
    </a-tabs>
    <a-spin v-if="show_loading" size="large" class="spin" />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Spin, Dropdown, Menu } from "ant-design-vue";
export default {
  data() {
    return { activeKey: "", show_loading: false };
  },
  components: {
    "a-spin": Spin,
    "a-menu": Menu,
    "a-dropdown": Dropdown,
    "a-menu-item": Menu.Item
  },
  computed: {
    ...mapState(["exclude", "panes"])
  },
  mounted() {
    this.activeKey = this.$route.name;
  },
  methods: {
    ...mapMutations(["removePane", "setState"]),
    tabClick(key) {
      if (key !== this.$route.name) {
        this.$router.push({ name: key });
      }
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    remove(targetKey) {
      let activeKey = this.activeKey;
      this.removePane({
        activeKey,
        targetKey,
        callback: activeKey => {
          this.activeKey = activeKey;
        }
      });
    },
    reloadHandle(name) {
      this.show_loading = true;
      this.setState({
        exclude: name
      });
      setTimeout(() => {
        this.show_loading = false;
      }, 1000);
    },
    closeTab(is_all) {
      let panes = ["dashboard"];
      if (is_all) {
        this.$router.push({ name: "dashboard" });
      } else {
        panes = this.panes.filter(item => item === this.$route.name);
      }
      this.setState({
        panes
      });
    }
  },
  watch: {
    $route(newVal) {
      this.activeKey = newVal.name;
    }
  }
};
</script>

<style lang="scss">
@import "@assets/css/mixin.scss";
.alive-tab {
  background: $bg-gray-color;
  overflow: hidden;
  padding: 0 15px;
  width: 100%;
  display: flex;
  .operate-content {
    height: 40px;
    line-height: 40px;
    padding-right: 6px;
    cursor: pointer;
    .menu-text {
      font-size: 13px;
    }
  }
  .spin {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 99999;
  }
  .ant-tabs-card > .ant-tabs-bar {
    border-bottom: none;
  }
  .tab-item {
    width: 100%;
    padding: 0 0 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .circle {
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background: $bg-gray-color;
      margin-left: 4px;
      margin-right: 10px;
    }
    .icon {
      font-size: 10px;
      font-weight: bold;
      padding: 4px;
    }
    .close {
      margin-left: 10px;
      color: $disabled-color;
      &:hover {
        color: $text-color;
      }
    }
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    border-color: $bg-color;
    background: $bg-color;
    height: 32px;
    line-height: 32px;
    margin-right: 6px;
    margin-top: 4px;
    border-radius: 0;
    padding: 0;
    font-size: 13px;
    &:hover {
      color: $text-color;
    }
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
    border-color: $bg-color;
    background: $bg-color;
    border-radius: 0;
    .circle {
      background: $primary-color;
      .icon {
        display: none;
      }
    }
    &:hover {
      color: $primary-color;
      .circle {
        height: auto;
        margin-left: 0;
        margin-right: 14px;
        background: transparent;
      }
      .icon {
        display: block;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
