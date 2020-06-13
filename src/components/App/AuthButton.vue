<script>
export default {
  name: "auth-button",
  props: {
    locData: Object,
    userSignedIn: Boolean,
    onSignIn: Function,
    onSignOut: Function
  }
};
</script>
<template>
  <span>
    <v-btn v-if="userSignedIn" @click="onSignOut">
      {{ locData.signout }}
    </v-btn>
    <v-btn v-if="!userSignedIn" @click="onSignIn" color="primary">
      {{ locData.signin }}
    </v-btn>
  </span>
</template>
