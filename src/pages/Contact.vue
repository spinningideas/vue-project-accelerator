<script>
export default {
  name: "contact",
  mounted: async function() {
    let localizationService = this.$services.LocalizationService();

    const locCode = localizationService.getUserLocale();
    const locDataLoaded = await localizationService.getLocalizedTextSet(
      [
        "contact",
        "contactdescription",
        "moreinfo",
        "save",
        "name",
        "email",
        "message",
        "messagedescription",
        "required",
        "success"
      ],
      locCode
    );
    this.$data.locData = locDataLoaded;
  },
  methods: {
    getLocalizedValidationMessage: function() {
      return this.$data.locData.required ? this.$data.locData.required : "";
    },
    sendContactMessage: function() {
      this.$refs.form.validate();
      if (this.$data.formIsValid) {
        this.$services.NotificationsService.success(
          this,
          this.$data.locData.success
        );

        this.$refs.form.reset();
        this.$refs.form.resetValidation();
      }
    }
  },
  data() {
    return {
      locData: {},
      name: "",
      email: "",
      message: "",
      formIsValid: false,
      enableLazyValidation: false,
      requiredTextFieldRules: [
        v => (!!v && v.length > 2) || this.getLocalizedValidationMessage()
      ],
      emailRules: [
        v => !!v || this.getLocalizedValidationMessage(),
        v => /.+@.+/.test(v) || this.getLocalizedValidationMessage()
      ]
    };
  }
};
</script>

<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="container-content">
        <v-card-text>
          <h2>{{ locData.contact }}</h2>
          <p>
            {{ locData.contactdescription }}
          </p>
          <v-form
            ref="form"
            v-model="formIsValid"
            :lazy-validation="enableLazyValidation"
          >
            <v-layout row wrap class="p-3">
              <v-flex xs12>
                <v-text-field
                  ref="NameInputRef"
                  name="Name"
                  v-bind:label="locData.name"
                  v-model="name"
                  :rules="requiredTextFieldRules"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  ref="EmailAddressInputRef"
                  name="email"
                  v-bind:label="locData.email"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  ref="MessageInputRef"
                  name="message"
                  v-bind:label="locData.message"
                  multi-line
                  v-model="message"
                  :rules="requiredTextFieldRules"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-btn
                  color="primary"
                  :disabled="!formIsValid"
                  @click="sendContactMessage"
                >
                  {{ locData.save }}
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
