<script>
export default {
  name: "modal",
  props: {
    open: Boolean,
    title: String,
    width: Number,
    onClose: Function
  }
};
</script>
<template>
  <v-dialog v-model="open" width="width">
    <v-card>
      <v-card-title class="d-flex flex-row">
        <span v-if="title" class="d-flex justify-start">
          {{ title }}
        </span>
        <v-btn
          class="d-flex ml-auto"
          icon
          color="primary"
          dark
          @click="onClose"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
