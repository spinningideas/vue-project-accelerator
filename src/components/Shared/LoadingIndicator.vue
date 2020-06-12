<script>
export default {
  name: "loading-indicator",
  props: {
    loading: Boolean
  }
};
</script>
<template>
  <v-progress-circular
    v-if="loading"
    indeterminate
    color="primary"
  ></v-progress-circular>
</template>
