<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
// services
import { useAppStore } from '@/services/appStore'
import { useNotificationsStore } from '@/services/notificationsStore'
import localizationService from '@/services/localizationService'
import geoService from '@/services/geoService'
// components
import Modal from '@/components/Shared/Modal.vue'

const appService = useAppStore()
const notificationsService = useNotificationsStore()
const locService = localizationService()
const geographyService = geoService()

const router = useRouter()

// state
let userSignedIn = ref<boolean>(false)
let locData = ref<any>({})
let ipAddressMessage = ref<string>('')
let ipAddressDialogOpen = ref<boolean>(false)
let dialogOpen = ref<boolean>(false)

onMounted(async () => {
  userSignedIn.value = appService.userHasSignedIn()
  const locCode = locService.getUserLocale()

  const locDataLoaded = await locService.getLocalizedTextSet(
    [
      'welcome',
      'homepagewelcome',
      'getstartedmessage',
      'notifications',
      'notificationsdescription',
      'modals',
      'modalsdescription',
      'error',
      'success',
      'view',
      'close',
      'authenticatedcontent',
      'authenticatedcontentdescription',
      'services',
      'serviceexampletitle',
      'serviceexampledescription',
      'forms',
      'formsexample',
      'formsexampledescription'
    ],
    locCode
  )
  locData.value = locDataLoaded

  if (userSignedIn.value === true) {
    router.push({ path: '/summary' })
  }
})

const signIn = () => {
  appService.signIn().then((userSignedInValue: boolean) => {
    if (userSignedIn) {
      userSignedIn.value = userSignedInValue
      router.push({ path: '/' })
    }
  })
}

const showSuccessNotification = () => {
  notificationsService.success(locData.value.success)
}
const showErrorNotification = () => {
  notificationsService.error(locData.value.error)
}
const toggleModalDialog = () => {
  dialogOpen.value = !dialogOpen.value
}

const toggleIPAddressDialog = () => {
  ipAddressDialogOpen.value = !ipAddressDialogOpen.value
}

const showIpAddressUsingHttpClient = async () => {
  await geographyService.getCurrentIPAddress().then((response) => {
    if (response) {
      ipAddressMessage.value = response.message
      toggleIPAddressDialog()
    }
  })
}
</script>
<template>
  <v-container fluid fill-height>
    <v-row no-gutters>
      <v-col cols="12" class="p-2">
        <h2>{{ locData.welcome }}</h2>
        <p>{{ locData.homepagewelcome }}</p>
        <v-container fluid v-if="userSignedIn">
          <v-card>
            <v-card-title primary-title>{{ locData.authenticatedcontent }}</v-card-title>
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
            <v-btn variant="elevated" color="primary" @click="showSuccessNotification()">
              {{ locData.success }}
            </v-btn>
            <v-btn variant="elevated" color="primary" @click="showErrorNotification()">
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
            <v-btn variant="elevated" color="primary" @click="toggleModalDialog()">
              {{ locData.view }}
            </v-btn>
            <Modal
              :title="locData.welcome"
              :open="dialogOpen"
              :on-close="toggleModalDialog"
              width="500"
            >
              <p>{{ locData.homepagewelcome }}</p>
            </Modal>
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
            <v-btn variant="elevated" color="primary" @click="showIpAddressUsingHttpClient()">
              {{ locData.serviceexampletitle }}
            </v-btn>
          </v-card-actions>
        </v-card>
        <Modal
          :title="locData.serviceexampletitle"
          :open="ipAddressDialogOpen"
          :on-close="toggleIPAddressDialog"
          width="500"
        >
          <p>{{ ipAddressMessage }}</p>
        </Modal>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-card height="175">
          <v-card-title primary-title>{{ locData.forms }}</v-card-title>
          <v-card-text height="65">
            {{ locData.formsexampledescription }}
          </v-card-text>
          <v-card-actions>
            <v-btn variant="elevated" color="primary" to="/contact">
              {{ locData.formsexample }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
