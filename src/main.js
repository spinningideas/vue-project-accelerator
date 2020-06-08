import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
// UX Kit - and styles
import vuetify from "@/plugins/vuetify";
import "vuetify/src/styles/main.sass";
// Routing
import router from "./router";
// Services
import VueServices from "./services/vue-services";
import notificationsService from "./services/notificationsService";
import localizationService from "./services/localizationService";
import geoService from "./services/geoService";

let services = {
  notificationsService: notificationsService,
  localizationService: localizationService,
  geoService: geoService
};

// Setup Vue to use these libraries
Vue.use(VueServices, services);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  services: services,
  render: h => h(App)
}).$mount("#app");
