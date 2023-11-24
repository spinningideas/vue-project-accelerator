<script setup lang="ts">
import { onMounted, ref } from 'vue'
// services
import { useAppStore } from '@/services/appStore'
import localizationService from '@/services/localizationService'
// components
import AuthButton from '@/components/App/AuthButton.vue'
import AuthDialog from '@/components/App/AuthDialog.vue'
import LanguageSelection from '@/components/App/LanguageSelection.vue'
import ThemeSelectionButton from '@/components/App/ThemeSelectionButton.vue'

const appService = useAppStore()
const locService = localizationService()

// state
let drawerVisible = ref<boolean>(false)
let userSignedIn = ref<boolean>(false)
let userSignInDialogOpen = ref<boolean>(false)
let locData = ref<any>({})

onMounted(async () => {
  const locCode = locService.getUserLocale()
  const locDataLoaded = await locService.getLocalizedTextSet(
    [
      'apptitle',
      'signin',
      'signindescription',
      'signout',
      'home',
      'contact',
      'about',
      'cancel',
      'settings'
    ],
    locCode
  )

  locData.value = locDataLoaded
  userSignedIn.value = appService.userHasSignedIn()
})

const onSignIn = () => {
  userSignInDialogOpen.value = true
}

const onSignComplete = () => {
  appService.signIn()
  userSignedIn.value = true
  userSignInDialogOpen.value = false
}

const onSignOut = () => {
  appService.signOut()
  if (userSignedIn.value) {
    userSignedIn.value = false
    window.location.reload()
  }
  userSignInDialogOpen.value = false
}

const toggleDrawerVisible = (forceClose: boolean) => {
  drawerVisible.value = !drawerVisible.value
  if (forceClose) {
    setTimeout(() => {
      drawerVisible.value = false
    }, 0)
  }
}

const closeDrawer = () => {
  toggleDrawerVisible(true)
}
</script>
<template>
  <v-container fluid>
    <v-app-bar app flat class="elevation-1">
      <v-app-bar-nav-icon @click.stop="toggleDrawerVisible(false)"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ locData.apptitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn :title="locData.settings" to="/settings" @click="closeDrawer()">
          <v-icon size="large">mdi-cog</v-icon></v-btn
        >
        <ThemeSelectionButton></ThemeSelectionButton>
        <LanguageSelection></LanguageSelection>
        <AuthButton
          v-bind:loc-data="locData"
          v-bind:user-signed-in="userSignedIn"
          v-bind:on-sign-in="onSignIn"
          v-bind:on-sign-out="onSignOut"
        ></AuthButton>
        <AuthDialog
          v-bind:loc-data="locData"
          v-bind:user-signed-in="userSignedIn"
          v-bind:dialog-open="userSignInDialogOpen"
          v-bind:on-sign-in-complete="onSignComplete"
          v-bind:on-sign-in-cancel="onSignOut"
        ></AuthDialog>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      app
      fixed
      clipped
      location="left"
      height="100%"
      overflow
      v-model="drawerVisible"
      :hide-overlay="false"
    >
      <v-list>
        <v-list-item
          prepend-icon="mdi-home"
          :title="locData.home"
          to="/"
          @click="closeDrawer()"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-email"
          :title="locData.contact"
          to="/contact"
          @click="closeDrawer()"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-cog"
          :title="locData.settings"
          to="/settings"
          @click="closeDrawer()"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-help"
          :title="locData.about"
          to="/about"
          @click="closeDrawer()"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
