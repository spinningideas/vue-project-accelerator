/*
https://vuetifyjs.com/en/customization/theme/
*/

import Vue from "vue";
import Vuetify, {
  VApp,
  VAlert,
  VAvatar,
  VChip,
  VDialog,
  VDatePicker,
  VNavigationDrawer,
  VCard,
  VList,
  VBtn,
  VProgressCircular,
  VIcon,
  VImg,
  VMenu,
  VGrid,
  VSelect,
  VSubheader,
  VTextField,
  VTextarea,
  VToolbar,
  VTabs,
  transitions
} from "vuetify";

let vuetifyOptions = {
  components: {
    VApp,
    VAvatar,
    VAlert,
    VChip,
    VDialog,
    VDatePicker,
    VNavigationDrawer,
    VCard,
    VList,
    VBtn,
    VProgressCircular,
    VIcon,
    VImg,
    VMenu,
    VGrid,
    VSelect,
    VSubheader,
    VTextField,
    VTextarea,
    VToolbar,
    VTabs,
    transitions
  },
  theme: {
    primary: "#1e88e5",
    secondary: "#1976d2",
    accent: "#1565c0",
    error: "#cc0000",
    success: "#77b300",
    warning: "#FFC107"
  },
  customProperties: false,
  iconfont: "md"
};

Vue.use(Vuetify, vuetifyOptions);

export default new Vuetify(vuetifyOptions);
