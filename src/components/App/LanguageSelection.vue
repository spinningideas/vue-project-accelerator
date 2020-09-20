<script>
export default {
  name: "language-selection",
  mounted: function() {
    let localizationService = this.$services.LocalizationService();
    this.$data.languages = localizationService.getLocales();
    this.$data.selectedLocaleCode = localizationService.getUserLocale();
  },
  methods: {
    onLanguageSelect: function(localeCode) {
      let localizationService = this.$services.LocalizationService();
      let navigationService = this.$services.NavigationService();
      localizationService.setUserLocale(localeCode);
      navigationService.reloadWindow();
    }
  },
  data: () => ({
    selectedLocaleCode: "",
    languages: []
  })
};
</script>
<template>
  <v-menu left bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-list v-model="selectedLocaleCode" active-class="primary-text">
      <v-list-item
        v-for="lang in languages"
        :key="lang.localeCode"
        @click="onLanguageSelect(lang.localeCode)"
        :class="lang.localeCode === selectedLocaleCode ? 'primary-text' : ''"
      >
        <v-list-item-title>{{ lang.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
