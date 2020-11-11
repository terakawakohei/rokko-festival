<template>
  <v-app>
    <!-- <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-title class="title">
          神戸大学漫画研究会
        </v-list-item-title>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list nav>
        <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense>
  
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    
    </v-app-bar> -->

    <!-- <v-tabs
      show-arrows
      background-color="white"
      centered
      icons-and-text
      color="#78BBE6"
    >
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
        部誌
        <v-icon>mdi-book-open-blank-variant</v-icon>
      </v-tab>
    </v-tabs> -->

    <!-- <v-app-bar app white shrink-on-scroll prominent>
      <v-tabs centered white icons-and-text color="#78BBE6">
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
          部誌
          <v-icon>mdi-book-open-blank-variant</v-icon>
        </v-tab>
      </v-tabs>
    </v-app-bar> -->
    <!-- <v-btn
      fixed
      fab
      bottom
      right
      color="#BDBDBD88"
      style="bottom: 100px"
      @click="active = !active"
    >
      <v-icon color="white">mdi-chevron-up</v-icon>
    </v-btn> -->
    <v-main>
      <router-view />
    </v-main>
    <v-snackbar top v-model="snackbarVisible">
      {{ this.$store.getters["message"] }}
    </v-snackbar>
    <Footer />
    <v-bottom-navigation
      height="83"
      class="py-5"
      fixed
      :value="value"
      color="#78BBE6"
    >
      <v-btn to="/">
        <span>ホーム</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/theme">
        <span>テーマパネル</span>

        <v-icon>mdi-weather-night</v-icon>
      </v-btn>

      <v-btn to="/free">
        <span>フリーパネル</span>

        <v-icon>mdi-brush</v-icon>
      </v-btn>
      <v-btn to="/offset">
        <span>部誌</span>

        <v-icon>mdi-book-open-blank-variant</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import Footer from "@/components/footer.vue";
export default {
  name: "App",

  components: { Footer },
  computed: {
    // snackbarが自動でfalseに設定するためセッタを用意して、明示的にdispatchからOffするようにする
    snackbarVisible: {
      get() {
        return this.$store.state.isEnable;
      },
      set() {
        return this.$store.dispatch("snackOff");
      },
    },
  },

  data: () => ({
    drawer: false,
    active: true,
  }),
};
</script>
