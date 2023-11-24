<script setup lang="ts">
import { defineProps } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const isMobileDisplay = mobile.value as boolean

const props = defineProps<{
  open: boolean
  title: string
  width: number
  onClose: Function
}>()
</script>
<template>
  <v-dialog
    v-model="props.open"
    transition="dialog-bottom-transition"
    overlay-color="transparent"
    overlay-opacity="0"
    :width="props.width"
    :fullscreen="isMobileDisplay"
  >
    <v-card>
      <v-card-title class="d-flex flex-row">
        <span v-if="props.title" class="d-flex justify-start">
          {{ props.title }}
        </span>
        <v-btn class="d-flex ml-auto" color="primary" @click="props.onClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
