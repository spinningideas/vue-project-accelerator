import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
// UX Kit - and styles
import vuetifyInitialized from "@/plugins/vuetify";
import "vuetify/src/styles/main.sass";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@/styles/app.scss";
// Routing
import router from "./router";
// Services
import VueServices from "@/services/vue-services";

import AuthService from "@/services/AuthService";
import NotificationsService from "@/services/NotificationsService";
import NavigationService from "@/services/NavigationService";
import LocalizationService from "@/services/LocalizationService";
import GeoService from "@/services/GeoService";

let services = {
  AuthService: AuthService,
  NotificationsService: NotificationsService,
  NavigationService: NavigationService,
  LocalizationService: LocalizationService,
  GeoService: GeoService
};

// Setup Vue to use these libraries
Vue.use(VueServices, services);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify: vuetifyInitialized,
  services: services,
  render: h => h(App)
}).$mount("#app");
