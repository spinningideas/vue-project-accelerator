import { createApp } from 'vue'
import App from '@/App.vue'
// Routing
import router from '@/router'
// Pinia Store
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// icon fonts: https://vuetifyjs.com/en/features/icon-fonts/
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// notifications
import Notifications from '@kyvg/vue3-notification'
// styling
import '@/styling/main.css'
import { themeCustom } from '@/styling/theme'

const vuetify = createVuetify({
  components: { ...components },
  directives,
  theme: themeCustom,
  icons: {
    defaultSet: 'mdi'
  },
  defaults: {
    VSheet: {
      elevation: 0
    },
    VCard: {
      padding: 0
    },
    VBtn: {
      color: 'primary',
      variant: 'elevated',
      rounded: true
    },
    VIcon: {
      rounded: true
    }
  }
})

const pinia = createPinia()

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(Notifications)
app.use(pinia)

app.mount('#app')
