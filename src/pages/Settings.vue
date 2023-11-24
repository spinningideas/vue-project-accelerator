<script setup lang="ts">
import { onMounted, ref } from 'vue'
// services
import localizationService from '@/services/localizationService'
import localStorageService from '@/services/localStorageService'
import navigationService from '@/services/navigationService'
import { getColors } from '@/styling/colors'
// components
import ThemeSelectionButton from '@/components/App/ThemeSelectionButton.vue'
// models
import type Colors from '@/models/Colors'
// constants
import { DEFAULT_THEME_COLOR, DEFAULT_THEME_SETTING } from '@/styling/theme'

const locService = localizationService()
const storageService = localStorageService()
const navService = navigationService()

// state
const colors = ref<Colors[]>([])
let userColorSetting = ref<string>(DEFAULT_THEME_COLOR)
let locData = ref<any>({})

onMounted(async () => {
  const locCode = locService.getUserLocale()
  const locDataLoaded = await locService.getLocalizedTextSet(
    ['color', 'theme', 'settings', 'dark', 'light', 'settingsdescription', 'save'],
    locCode
  )
  const colorSetting = storageService.getValueDefaulted<string>('color', DEFAULT_THEME_COLOR)
  const themeSetting = storageService.getValueDefaulted<string>('theme', DEFAULT_THEME_SETTING)

  locData.value = locDataLoaded
  userColorSetting.value = colorSetting

  colors.value = getColors()
})

const onColorSelect = (colorName: string) => {
  storageService.setValue('color', colorName)
  navService.reloadWindow()
}
</script>

<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <h2>{{ locData.settings }}</h2>
            <p>{{ locData.settingsdescription }}</p>

            <v-container fluid>
              <v-row dense>
                <v-col cols="12" md="6" lg="6">
                  <v-card class="pa-2">
                    <v-card-title primary-title>{{ locData.color }}</v-card-title>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-wrap pb-3">
                      <v-btn
                        variant="elevated"
                        :color="color.colors?.[800]"
                        v-for="color in colors"
                        :key="color.colorName"
                        @click="onColorSelect(color.colorName)"
                        class="ma-1"
                      >
                        <v-icon start v-if="color.colorName === userColorSetting">
                          mdi-check-bold</v-icon
                        >
                        {{ color.colorName }}
                      </v-btn>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                  <v-card height="200" class="pa-2">
                    <v-card-title primary-title>{{ locData.theme }}</v-card-title>
                    <div class="ma-2">
                      <ThemeSelectionButton />
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
@/models/Colors
