import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import "assets/css/global.css";

Vue.config.productionTip = false;

import axios from "axios";
import "./axios/axios";
Vue.prototype.$http = axios;

import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
