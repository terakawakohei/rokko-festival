<template>
  <v-footer elevation="5" white padless>
    <v-col class="text-center basil" cols="12">
      <a href="https://twitter.com/kobe_u_cc">
        <v-icon>mdi-twitter</v-icon>
      </a>
    </v-col>

    <!-- <v-card-text class="basil--text pt-0">
        新歓活動中！
      </v-card-text> -->
    <v-col class="text-center basil small caption" cols="12">
      新歓活動中！
    </v-col>
    <v-divider></v-divider>
    <v-col class="text-center basil small font-italic text-caption" cols="12">
      ⓒ{{ new Date().getFullYear() }} —
      <strong>神戸大学漫画研究会</strong>
    </v-col>
  </v-footer>
  <!-- <v-container py-10>
    <v-row justify="center" cols="3">
      <a href="https://twitter.com/kobe_u_cc">
        <v-icon>mdi-twitter</v-icon>
      </a>
    </v-row>
    <v-row justify="center" cols="3">
      <p class="caption ">
        ⓒ 2020 神戸大学漫画研究会
      </p>
    </v-row>
  </v-container> -->
</template>

<script>
// @ is an alias to /src
// import Home from '@/views/Home.vue';
// import About from '@/views/About.vue';
// import Gallery from '@/views/Gallery.vue';

export default {
  data() {
    return {};
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
