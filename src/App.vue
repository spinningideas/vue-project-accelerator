<script setup lang="ts">
import localStorageService from '@/services/localStorageService'
// components
import Navigation from '@/components/App/Navigation.vue'
import { DEFAULT_THEME_SETTING } from '@/styling/theme'

// services
const storageService = localStorageService()
const themeSetting = storageService.getValueDefaulted<string>('theme', DEFAULT_THEME_SETTING)
</script>
<template>
  <v-theme-provider :theme="themeSetting" with-background>
    <v-app app flat standalone>
      <Navigation />
      <v-main>
        <v-container class="container-content" fluid transition="fade-transition" mode="out-in">
          <RouterView />
        </v-container>
      </v-main>
      <notifications position="top right" />
    </v-app>
  </v-theme-provider>
</template>
