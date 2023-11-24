<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  locData: any
  dialogOpen: boolean
  userSignedIn: boolean
  onSignInComplete: Function
  onSignInCancel: Function
}>()
</script>
<template>
  <v-dialog
    v-model="props.dialogOpen"
    transition="dialog-bottom-transition"
    overlay-color="transparent"
    overlay-opacity="0"
    width="auto"
    height="auto"
  >
    <v-card width="300" height="100">
      <v-card-title primary-title>
        {{ props.locData.signindescription }}
      </v-card-title>

      <v-card-actions>
        <v-btn @click="props.onSignInCancel">
          {{ props.locData.cancel }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn variant="elevated" color="primary" @click="props.onSignInComplete">
          {{ props.locData.signin }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
