<script setup lang="ts">
import { onMounted, ref } from 'vue'
// services
import localizationService from '@/services/localizationService'
import navigationService from '@/services/navigationService'
// models
import type Language from '@/models/Language'

const locService = localizationService()
const navService = navigationService()

// state
let languages = ref<Language[]>([])
let selectedLocaleCode = ref<string>('')

onMounted(async () => {
  languages.value = locService.getLocales()
  selectedLocaleCode.value = locService.getUserLocale()
})

const onLanguageSelect = (localeCode: string) => {
  locService.setUserLocale(localeCode)
  navService.reloadWindow()
}
</script>
<template>
  <v-menu left bottom transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-list v-model="selectedLocaleCode" active-class="primary-text">
      <v-list-item
        v-for="lang in languages"
        :key="lang.localeCode"
        @click="onLanguageSelect(lang.localeCode)"
        :class="lang.localeCode === selectedLocaleCode ? 'primary-text' : ''"
        :active="lang.localeCode === selectedLocaleCode"
      >
        <v-list-item-title>{{ lang.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
