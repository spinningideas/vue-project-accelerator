<script>
import Vue from "vue";
import AuthButton from "@/components/App/AuthButton";
import AuthDialog from "@/components/App/AuthDialog";
import LanguageSelection from "@/components/App/LanguageSelection";

export default {
  name: "navigation",
  components: {
    AuthButton,
    AuthDialog,
    LanguageSelection
  },
  mounted: async function() {
    let authService = this.$services.AuthService();
    let localizationService = this.$services.LocalizationService();

    const locCode = localizationService.getUserLocale();
    const locDataLoaded = await localizationService.getLocalizedTextSet(
      [
        "apptitle",
        "signin",
        "signindescription",
        "signout",
        "home",
        "contact",
        "about",
        "cancel"
      ],
      locCode
    );

    this.$data.userSignedIn = authService.userHasSignedIn();
    this.$data.locData = locDataLoaded;
  },
  methods: {
    onSignIn: function() {
      this.$data.userSignInDialogOpen = true;
    },
    onSignComplete: function() {
      let authService = this.$services.AuthService();
      authService.signIn();
      this.$data.userSignedIn = true;
      this.$data.userSignInDialogOpen = false;
    },
    onSignOut: function() {
      let authService = this.$services.AuthService();
      authService.signOut();
      if (this.$data.userSignedIn) {
        this.$data.userSignedIn = false;
        window.location.reload();
      }
      this.$data.userSignInDialogOpen = false;
    },
    toggleDrawer: function(forceClose) {
      this.$data.drawer = !this.$data.drawer;
      if (forceClose) {
        setTimeout(() => {
          this.$data.drawer = false;
        }, 0);
      }
    }
  },
  data: () => ({
    drawer: false,
    userSignedIn: false,
    userSignInDialogOpen: false,
    locData: {}
  })
};
</script>
<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item to="/" @click="toggleDrawer(true)">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ locData.home }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/contact" @click="toggleDrawer(true)">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ locData.contact }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about" @click="toggleDrawer(true)">
          <v-list-item-action>
            <v-icon>mdi-help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ locData.about }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense color="white">
      <v-app-bar-nav-icon
        @click.stop="toggleDrawer(false)"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>{{ locData.apptitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <language-selection class="mr-2"></language-selection>
      <auth-button
        v-bind:loc-data="locData"
        v-bind:user-signed-in="userSignedIn"
        v-bind:on-sign-in="onSignIn"
        v-bind:on-sign-out="onSignOut"
      ></auth-button>
      <auth-dialog
        v-bind:loc-data="locData"
        v-bind:user-signed-in="userSignedIn"
        v-bind:dialog-open="userSignInDialogOpen"
        v-bind:on-sign-in-complete="onSignComplete"
        v-bind:on-sign-in-cancel="onSignOut"
      ></auth-dialog>
    </v-app-bar>
  </div>
</template>
