<script setup lang="ts">
import { ref, onMounted } from 'vue'
// services
import { useNotificationsStore } from '@/services/notificationsStore'
import localizationService from '@/services/localizationService'

const notificationsService = useNotificationsStore()
const locService = localizationService()

// state
const form = ref()

let fromName = ref('')
let fromEmailAddress = ref('')
let fromEmailMessage = ref('')

let formIsValid = ref(false)
const enableLazyValidation = ref(false)
const requiredTextFieldRules = ref([
  (v: any) => (!!v && v.length > 2) || getLocalizedValidationMessage()
])
const emailRules = ref([
  (v: any) => !!v || getLocalizedValidationMessage(),
  (v: any) => /.+@.+/.test(v) || getLocalizedValidationMessage()
])

let locData = ref<any>({})

onMounted(async () => {
  const locCode = locService.getUserLocale()
  const locDataLoaded = await locService.getLocalizedTextSet(
    [
      'contact',
      'contactdescription',
      'moreinfo',
      'save',
      'name',
      'email',
      'message',
      'messagedescription',
      'required',
      'success'
    ],
    locCode
  )

  locData.value = locDataLoaded
})

const getLocalizedValidationMessage = () => {
  return locData.required ? locData.required : ''
}

const sendContactMessage = () => {
  form.value?.validate()
  if (formIsValid.value) {
    notificationsService.success(locData.success)

    form.value?.reset()
    form.value?.resetValidation()
  }
}
</script>

<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" align="center" justify="center">
        <v-card maxWidth="400" flat>
          <v-card-text>
            <h2>{{ locData.contact }}</h2>
            <p>
              {{ locData.contactdescription }}
            </p>
            <v-form ref="form" v-model="formIsValid" :lazy-validation="enableLazyValidation">
              <v-container fluid>
                <v-col cols="12">
                  <v-text-field
                    ref="NameInputRef"
                    name="Name"
                    v-bind:label="locData.name"
                    v-model="fromName"
                    :rules="requiredTextFieldRules"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    ref="EmailAddressInputRef"
                    name="email"
                    v-bind:label="locData.email"
                    v-model="fromEmailAddress"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    ref="MessageInputRef"
                    name="message"
                    v-bind:label="locData.message"
                    multi-line
                    v-model="fromEmailMessage"
                    :rules="requiredTextFieldRules"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    variant="elevated"
                    color="primary"
                    :disabled="!formIsValid"
                    @click="sendContactMessage"
                  >
                    {{ locData.save }}
                  </v-btn>
                </v-col>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
