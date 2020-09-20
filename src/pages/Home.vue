<script>
import Vue from "vue";
import Modal from "@/components/Shared/Modal";
Vue.component("modal", Modal);

export default {
  name: "Home",
  components: {
    Modal
  },
  mounted: async function() {
    let authService = this.$services.AuthService();
    let localizationService = this.$services.LocalizationService();

    const locCode = localizationService.getUserLocale();
    const locDataLoaded = await localizationService.getLocalizedTextSet(
      [
        "welcome",
        "homepagewelcome",
        "getstartedmessage",
        "notifications",
        "notificationsdescription",
        "modals",
        "modalsdescription",
        "error",
        "success",
        "view",
        "close",
        "authenticatedcontent",
        "authenticatedcontentdescription",
        "services",
        "serviceexampletitle",
        "serviceexampledescription",
        "forms",
        "formsexample",
        "formsexampledescription"
      ],
      locCode
    );

    this.$data.userSignedIn = authService.userHasSignedIn();
    this.$data.locData = locDataLoaded;
  },
  methods: {
    showSuccessNotification: function() {
      this.$services.NotificationsService.success(
        this,
        this.$data.locData.success
      );
    },
    showErrorNotification: function() {
      this.$services.NotificationsService.error(this, this.$data.locData.error);
    },
    toggleModalDialog: function() {
      this.$data.dialogOpen = !this.$data.dialogOpen;
    },
    toggleIPAddressDialog: function() {
      this.$data.ipAddressDialogOpen = !this.$data.ipAddressDialogOpen;
    },
    showIpAddressUsingHttpClient: async function() {
      await this.$services
        .GeoService()
        .getCurrentIPAddress()
        .then(response => {
          if (response) {
            this.$data.ipAddressMessage = response.message;
            this.toggleIPAddressDialog();
          }
        });
    }
  },
  data: () => ({
    locData: {},
    ipAddressMessage: "",
    ipAddressDialogOpen: false,
    dialogOpen: false,
    userSignedIn: false
  })
};
</script>
<template>
  <v-container fluid fill-height>
    <v-row no-gutters>
      <v-col cols="12" class="p-2">
        <h2>{{ locData.welcome }}</h2>
        <p>{{ locData.homepagewelcome }}</p>
        <v-container fluid v-if="userSignedIn">
          <v-card>
            <v-card-title primary-title>{{
              locData.authenticatedcontent
            }}</v-card-title>
            <v-card-text>
              {{ locData.authenticatedcontentdescription }}
            </v-card-text>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12" md="4" lg="3">
        <v-card height="175">
          <v-card-title primary-title>{{ locData.notifications }}</v-card-title>
          <v-card-text height="65">
            {{ locData.notificationsdescription }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="showSuccessNotification()">
              {{ locData.success }}
            </v-btn>
            <v-btn color="primary" @click="showErrorNotification()">
              {{ locData.error }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-card height="175">
          <v-card-title primary-title>{{ locData.modals }}</v-card-title>
          <v-card-text height="65">
            {{ locData.modalsdescription }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="toggleModalDialog()">
              {{ locData.view }}
            </v-btn>
            <modal
              v-bind:title="locData.welcome"
              v-bind:open="dialogOpen"
              v-bind:on-close="toggleModalDialog"
            >
              <p>{{ locData.homepagewelcome }}</p>
            </modal>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-card height="175">
          <v-card-title primary-title>{{ locData.services }}</v-card-title>
          <v-card-text height="65">
            {{ locData.serviceexampledescription }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="showIpAddressUsingHttpClient()">
              {{ locData.serviceexampletitle }}
            </v-btn>
          </v-card-actions>
        </v-card>
        <modal
          v-bind:title="locData.serviceexampletitle"
          v-bind:open="ipAddressDialogOpen"
          v-bind:on-close="toggleIPAddressDialog"
        >
          <p>{{ ipAddressMessage }}</p>
        </modal>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-card height="175">
          <v-card-title primary-title>{{ locData.forms }}</v-card-title>
          <v-card-text height="65">
            {{ locData.formsexampledescription }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/contact">
              {{ locData.formsexample }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
