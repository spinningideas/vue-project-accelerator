<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  loading: boolean
}>()
</script>
<template>
  <v-progress-circular v-if="props.loading" indeterminate color="primary"></v-progress-circular>
</template>
