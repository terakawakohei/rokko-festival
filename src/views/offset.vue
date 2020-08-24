<template>
  <div>
    <v-row justify="center" class="py-10">
      <h1 class="display-1 font-weight-black">オフセット本</h1>
    </v-row>
    <!-- <v-row justify="center">
      <a
        href="http://localhost:8080/bibi/?book=Miserables.epub"
        data-bibi="embed"
        data-bibi-style="width: 50%; height: 400px;"
        >レミゼラブル</a
      >
      <div is="script" src="http://localhost:8080/bibi/and/jo.js"></div>
    </v-row> -->
    <v-row justify="center" class="mb-10">
      <v-btn @click="reset()">表示</v-btn>
    </v-row>
    <v-row justify="center">
      <a
        href="https://kucc-rokkofestival.herokuapp.com/bibi/?book=Miserables.epub"
        data-bibi="embed"
        data-bibi-style="width: 50%; height: 400px;"
      ></a>
      <!-- <div
        is="script"
        src="https://kucc-rokkofestival.herokuapp.com/bibi/and/jo.js"
      ></div> -->
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'offset',
  components: {},
  data() {
    return {};
  },
  created() {
    let recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute(
      'src',
      'https://kucc-rokkofestival.herokuapp.com/bibi/and/jo.js'
    );
    document.head.appendChild(recaptchaScript);
  },
  methods: {
    reset: function() {
      this.$router.go({path: this.$router.currentRoute.path, force: true});
    },
  },
};
</script>
<style>
.post-link {
  display: inline-block;
  word-break: break-all;
  padding: 2px 8px;
  border-radius: 5px;
  text-transform: none !important;
  white-space: normal;
  max-width: calc(100% - 30px);
  height: inherit !important;
}
</style>
