<script setup lang="ts">
import { onMounted, ref } from 'vue'
// services
import localStorageService from '@/services/localStorageService'
import navigationService from '@/services/navigationService'
import { DEFAULT_THEME_SETTING } from '@/styling/theme'

const storageService = localStorageService()
const navService = navigationService()

let userThemeSetting = ref<string>(DEFAULT_THEME_SETTING)

const onThemeChange = () => {
  const newTheme = userThemeSetting.value === 'light' ? 'dark' : 'light'
  storageService.setValue('theme', newTheme)
  navService.reloadWindow()
}

onMounted(async () => {
  const themeSetting = storageService.getValueDefaulted<string>('theme', DEFAULT_THEME_SETTING)
  userThemeSetting.value = themeSetting
})
</script>
<template>
  <v-btn @click="onThemeChange()">
    <v-icon size="large">{{
      userThemeSetting === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
    }}</v-icon>
  </v-btn>
</template>
