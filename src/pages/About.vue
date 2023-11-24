<script setup lang="ts">
import { onMounted, ref } from 'vue'
// services
import localizationService from '@/services/localizationService'

const locService = localizationService()

let locData = ref<any>({})

onMounted(async () => {
  const locCode = locService.getUserLocale()
  const locDataLoaded = await locService.getLocalizedTextSet(
    [
      'about',
      'aboutdescription',
      'technology',
      'technologydescription',
      'vuejs',
      'vuejsdescription',
      'vuetifylibrary',
      'vuetifylibrarydescription',
      'vitename',
      'vitenamedescription',
      'moreinfo'
    ],
    locCode
  )

  locData.value = locDataLoaded
})
</script>

<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12">
        <h2>{{ locData.about }}</h2>
        <p>{{ locData.aboutdescription }}</p>
        <h3>{{ locData.technology }}</h3>
        <p>{{ locData.technologydescription }}</p>

        <v-container fluid>
          <v-row dense>
            <v-col cols="12" md="4" lg="3">
              <v-card height="200">
                <v-card-title primary-title>{{ locData.vuejs }}</v-card-title>
                <v-card-text>
                  {{ locData.vuejsdescription }}
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    variant="elevated"
                    color="primary"
                    href="https://vuejs.org/"
                    target="_blank"
                  >
                    {{ locData.moreinfo }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" lg="3">
              <v-card height="200">
                <v-card-title primary-title>{{ locData.vuetifylibrary }}</v-card-title>
                <v-card-text>
                  {{ locData.vuetifylibrarydescription }}
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    variant="elevated"
                    color="primary"
                    href="https://vuetifyjs.com/en/"
                    target="_blank"
                  >
                    {{ locData.moreinfo }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" lg="3">
              <v-card height="200">
                <v-card-title primary-title>{{ locData.vitename }}</v-card-title>
                <v-card-text>
                  {{ locData.vitenamedescription }}
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    variant="elevated"
                    color="primary"
                    href="https://vitejs.dev/"
                    target="_blank"
                  >
                    {{ locData.moreinfo }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
