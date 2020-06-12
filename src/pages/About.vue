<script>
export default {
  name: "about",
  mounted: async function() {
    let localizationService = this.$services.LocalizationService();

    const locCode = localizationService.getUserLocale();
    const locDataLoaded = await localizationService.getLocalizedTextSet(
      [
        "about",
        "aboutdescription",
        "technology",
        "technologydescription",
        "vuejs",
        "vuejsdescription",
        "vuetifylibrary",
        "vuetifylibrarydescription",
        "vuecliname",
        "vueclinamedescription",
        "moreinfo"
      ],
      locCode
    );
    this.$data.locData = locDataLoaded;
  },
  data: () => ({
    locData: {}
  })
};
</script>
<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="container-content">
        <v-card-text>
          <h2>{{ locData.about }}</h2>
          <p>{{ locData.aboutdescription }}</p>
          <h3>{{ locData.technology }}</h3>
          <p>{{ locData.technologydescription }}</p>

          <v-layout row wrap>
            <v-flex lg3 md4 sm12 xs12>
              <v-card class="mt-2 mr-2 card-list">
                <v-card-title primary-title>{{ locData.vuejs }}</v-card-title>
                <v-card-text>
                  {{ locData.vuejsdescription }}
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    href="https://vuejs.org/"
                    target="_blank"
                  >
                    {{ locData.moreinfo }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex lg3 md4 sm12 xs12>
              <v-card class="mt-2 mr-2 card-list">
                <v-card-title primary-title>{{
                  locData.vuetifylibrary
                }}</v-card-title>
                <v-card-text>
                  {{ locData.vuetifylibrarydescription }}
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    href="https://vuetifyjs.com/en/"
                    target="_blank"
                  >
                    {{ locData.moreinfo }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex lg3 md4 sm12 xs12>
              <v-card class="mt-2 mr-2 card-list">
                <v-card-title primary-title>{{
                  locData.vuecliname
                }}</v-card-title>
                <v-card-text>
                  {{ locData.vueclinamedescription }}
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    href="https://cli.vuejs.org/"
                    target="_blank"
                  >
                    {{ locData.moreinfo }}
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
