<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import { ConfigProvider } from "ant-design-vue";
import "moment/locale/zh-cn";
export default {
  components: {
    "a-locale-provider": ConfigProvider
  },
  data() {
    return {
      locale: zh_CN
    };
  },
  mounted() {
    this.$bus.$on("change-lang", lang => {
      switch (lang) {
        case "zh-cn":
          this.locale = zh_CN;
          moment.locale("zh-cn");
          this.$i18n.locale = "zh";
          break;
        case "en":
          this.locale = null;
          this.$i18n.locale = "en";
          moment.locale("en");
          break;
        case "th":
          this.locale = null;
          this.$i18n.locale = "th";
          moment.locale("th");
          break;
        default:
          this.locale = zh_CN;
          moment.locale("zh-cn");
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
