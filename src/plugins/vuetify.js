/*
import only what is needed to reduce bundle size 
and be clearer about dependencies
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
  VSelect,
  VSubheader,
  VTextField,
  VTextarea,
  VToolbar,
  VTabs
} from "vuetify/lib";

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
    VSelect,
    VSubheader,
    VTextField,
    VTextarea,
    VToolbar,
    VTabs
  },
  theme: {
    primary: "#1976d2",
    secondary: "#1565c0",
    accent: "#1565c0",
    error: "#e53935",
    success: "#43a047",
    warning: "#ffd54f"
  },
  customProperties: false,
  icons: {
    iconfont: "md"
  }
};

Vue.use(Vuetify, vuetifyOptions);

export default new Vuetify(vuetifyOptions);
