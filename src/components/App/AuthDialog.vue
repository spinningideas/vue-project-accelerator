<script>
export default {
  name: "auth-dialog",
  props: {
    locData: Object,
    dialogOpen: Boolean,
    userSignedIn: Boolean,
    onSignInComplete: Function,
    onSignInCancel: Function
  }
};
</script>
<template>
  <div class="text-center">
    <v-dialog v-model="dialogOpen" width="500">
      <v-card>
        <v-card-title primary-title>
          {{ locData.signindescription }}
        </v-card-title>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="onSignInCancel">
            {{ locData.cancel }}
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onSignInComplete">
            {{ locData.signin }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
