<script>
export default {
  name: "contact",
  mounted: function() {
    if (!this.$services.listarificService.getState().userSignedIn) {
      this.$router.push("/");
    }
    this.generateRandomQuestionValues();
  },
  methods: {
    generateRandomQuestionValues: function() {
      var from = 1;
      var to = 10;
      var Q1 = Math.floor(Math.random() * to) + from;
      var Q2 = Math.floor(Math.random() * to) + from;
      this.$data.Q1Value = Q1;
      this.$data.Q2Value = Q2;
    },
    sendContactMessage: function() {
      if (this.$data.Q1Value + this.$data.Q2Value === this.$data.answer) {
        if (this.$data.fromName.length === 0) {
          this.$nextTick(function() {
            this.$refs.NameInputRef.focus();
          });
        }
        if (this.$data.fromEmailAddress.length === 0) {
          this.$nextTick(function() {
            this.$refs.EmailAddressInputRef.focus();
          });
        }
        if (this.$data.fromEmailSubject.length === 0) {
          this.$nextTick(function() {
            this.$refs.EmailSubjectInputRef.focus();
          });
        } else {
          this.$services.listarificService.sendMessage(
            this.$data.fromName,
            this.$data.fromEmailAddress,
            this.$data.fromEmailSubject,
            this.$data.fromEmailMessage
          );

          this.$services.notificationsService.success(this, "Email Sent");

          this.$router.push("/contact");
        }
      } else {
        this.$nextTick(function() {
          this.$refs.PreventSpamAnswerInputRef.focus();
        });
        this.$services.notificationsService.error(
          this,
          "Please answer the spam filter question correctly"
        );
      }
    }
  },
  data() {
    return {
      Q1Value: 1,
      Q2Value: 5,
      answer: "",
      fromName: "",
      fromEmailAddress: "",
      fromEmailSubject: "",
      fromEmailMessage: "",
      messages: "",
      state: this.$services.listarificService.getState()
    };
  }
};
</script>

<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="container-content pl-4 pr-4">
        <h2>Contact</h2>
        <p>Need to communicate with us? Send your info using the form below.</p>
        <p>
          Please include as much detail as needed to allow us to respond and to
          help us understand your needs.
        </p>
        <v-flex xs8>
          <v-text-field
            ref="NameInputRef"
            name="Name"
            label="Name"
            hint="Your Name"
            class="input-group--focused"
            v-model="fromName"
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            ref="EmailAddressInputRef"
            name="EmailAddress"
            label="Email Address"
            hint="Your Email Address"
            class="input-group"
            v-model="fromEmailAddress"
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            ref="EmailSubjectInputRef"
            name="EmailSubject"
            label="Email Subject"
            hint="Your Email Subject"
            class="input-group"
            multi-line
            v-model="fromEmailSubject"
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-text-field
            ref="EmailMessageInputRef"
            name="EmailMessage"
            label="Email Message"
            hint="Your Email Message"
            class="input-group"
            multi-line
            v-model="fromEmailMessage"
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-subheader>Please answer the following equation:</v-subheader>
          <p class="small">
            (this is a mechanism to help prevent automated form submission)
          </p>
        </v-flex>
        <v-layout row wrap>
          <v-flex xs2>
            <v-text-field
              ref="PreventSpamQ1InputRef"
              name="PreventSpamQ1"
              label=""
              readonly="readonly"
              v-model="Q1Value"
            ></v-text-field>
          </v-flex>
          <v-flex xs1>
            +
          </v-flex>
          <v-flex xs2>
            <v-text-field
              ref="PreventSpamQ2InputRef"
              name="PreventSpamQ2"
              label=""
              readonly="readonly"
              v-model="Q2Value"
            ></v-text-field>
          </v-flex>
          <v-flex xs1>
            =
          </v-flex>
          <v-flex xs2>
            <v-text-field
              ref="PreventSpamAnswerInputRef"
              name="PreventSpamAnswer"
              label=""
              v-model="answer"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-flex>
          <v-btn color="primary" @click="sendContactMessage">Submit</v-btn>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>
