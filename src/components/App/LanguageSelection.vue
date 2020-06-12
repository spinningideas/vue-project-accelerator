<script>
export default {
  name: "language-selection",
  mounted: function() {
    let localizationService = this.$services.LocalizationService();
    this.$data.localeCode = localizationService.getUserLocale();
    this.$data.languages = localizationService.getLocales();
  },
  methods: {
    onLanguageSelect: function(localeCode) {
      let localizationService = this.$services.LocalizationService();
      localizationService.setUserLocale(localeCode);
      window.location.reload();
    }
  },
  data: () => ({
    localeCode: "",
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
    <v-list>
      <v-list-item
        v-for="lang in languages"
        :key="lang.localeCode"
        @click="onLanguageSelect(lang.localeCode)"
      >
        <v-list-item-title>{{ lang.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
