<script setup lang="ts">
import { defineProps, ref } from 'vue'

// state
let userSignedIn = ref<boolean>(false)

const props = defineProps<{
  locData: any
  onSignIn: Function
  onSignOut: Function
}>()

</script>
<template>
  <v-btn variant="text" v-if="userSignedIn" @click="props.onSignOut">
    {{ props.locData.signout }}
  </v-btn>
  <v-btn variant="text" v-if="!userSignedIn" @click="props.onSignIn" color="primary">
    {{ props.locData.signin }}
  </v-btn>
</template>
