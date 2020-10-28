<template>
  <v-app>
    <v-app-bar app white shrink-on-scroll prominent>
      <v-tabs centered white icons-and-text color="basil">
        <v-tabs-slider></v-tabs-slider>

        <v-tab to="/">
          ホーム
          <v-icon>mdi-home</v-icon>
        </v-tab>

        <v-tab to="/theme">
          テーマパネル
          <v-icon>mdi-weather-night</v-icon>
        </v-tab>
        <v-tab to="/free">
          フリーパネル
          <v-icon>mdi-brush</v-icon>
        </v-tab>

        <v-tab to="/offset">
          オフセット本
          <v-icon>mdi-book-open-blank-variant</v-icon>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
