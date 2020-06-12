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
    showIpAddressUsingHttpClient: async function() {
      await this.$services
        .GeoService()
        .getCurrentIPAddress()
        .then(response => {
          if (response) {
            this.$data.ipAddressMessage = response.message;
          }
        });
    }
  },
  data: () => ({
    locData: {},
    ipAddressMessage: "",
    dialogOpen: false,
    userSignedIn: false
  })
};
</script>
<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="container-content">
        <v-card-text>
          <h2>{{ locData.welcome }}</h2>
          <p>{{ locData.homepagewelcome }}</p>

          <v-layout v-if="userSignedIn" row wrap>
            <v-flex lg3 md4 sm12 xs12>
              <v-card class="mt-2 mr-2 card-list">
                <v-card-title primary-title>{{
                  locData.authenticatedcontent
                }}</v-card-title>
                <v-card-text>
                  {{ locData.authenticatedcontentdescription }}
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex lg3 md4 sm12 xs12>
              <v-card class="mt-2 mr-2 card-list">
                <v-card-title primary-title>{{
                  locData.notifications
                }}</v-card-title>
                <v-card-text>
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
            </v-flex>
            <v-flex lg3 md4 sm12 xs12>
              <v-card class="mt-2 mr-2 card-list">
                <v-card-title primary-title>{{ locData.modals }}</v-card-title>
                <v-card-text>
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
            </v-flex>
            <v-flex lg3 md4 sm12 xs12>
              <v-card class="mt-2 mr-2 card-list">
                <v-card-title primary-title>{{
                  locData.services
                }}</v-card-title>
                <v-card-text>
                  {{ locData.serviceexampledescription }}
                  <v-alert
                    class="mt-2"
                    outlined
                    type="info"
                    v-if="ipAddressMessage"
                  >
                    {{ ipAddressMessage }}
                  </v-alert>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    @click="showIpAddressUsingHttpClient()"
                  >
                    {{ locData.serviceexampletitle }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex lg3 md4 sm12 xs12>
              <v-card class="mt-2 mr-2 card-list">
                <v-card-title primary-title>{{ locData.forms }}</v-card-title>
                <v-card-text>
                  {{ locData.formsexampledescription }}
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" to="/contact">
                    {{ locData.formsexample }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
