<template>
  <v-app-bar color="indigo darken-2" dark shrink-on-scroll prominent>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">神戸大学漫画研究会</h1>
    </v-card-title>

    <v-tabs v-model="tab" centered white icons-and-text color="basil">
      <v-tabs-slider></v-tabs-slider>

      <v-tab to="/">
        ホーム
        <v-icon>mdi-home</v-icon>
      </v-tab>

      <v-tab to="/panel">
        パネル展
        <v-icon>mdi-brush</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        オフセット本
        <v-icon>mdi-book-open-blank-variant</v-icon>
      </v-tab>
    </v-tabs>
  </v-card> -->
</template>

<script>
// @ is an alias to /src
// import Home from '@/views/Home.vue';
// import About from '@/views/About.vue';
// import Gallery from '@/views/Gallery.vue';

export default {
  data() {
    return {
      tab: null,
      items: ['Appetizers', 'Entrees', 'Deserts', 'Cocktails'],
    };
  },
};
</script>

<style>
/* Helper classes */
.basil {
  background-color: #ffffff !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
