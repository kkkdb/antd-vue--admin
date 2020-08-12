import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/request";
import api from "./common/api";
import Zh from "./assets/lang/zh";
import En from "./assets/lang/en";
import Th from "./assets/lang/th";
import VueI18n from "vue-i18n";
import "./utils/antd";
import "./assets/css/reset.css";
import "./assets/css/mixin.scss";
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "zh", // 语言标识
  messages: {
    zh: Zh,
    en: En,
    th: Th
  }
});
Vue.prototype.$api = api;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
