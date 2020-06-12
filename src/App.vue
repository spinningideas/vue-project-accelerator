<script>
import Navigation from "@/components/App/Navigation";
import Notifications from "@/components/Shared/Notifications";

export default {
  components: {
    Navigation,
    Notifications
  },
  data: () => ({})
};
</script>
<template>
  <v-app id="appshell">
    <navigation />
    <v-content class="content-container">
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <notifications ref="notificationsRef"></notifications>
  </v-app>
</template>
