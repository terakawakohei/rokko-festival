<template>
  <div>
    <v-row justify="center" class="py-10">
      <h1 class="display-1 font-weight-black">オフセット本</h1>
    </v-row>
    <v-row justify="center">
      <v-card
        href="https://kucc-rokkofestival.herokuapp.com/bibi/?book=Miserables.epub"
        width="50%"
      >
        <v-img :src="loadImg('みーはー表紙.jpg')"></v-img>
      </v-card>
    </v-row>
    <v-row justify="center">
      <v-card width="50%">
        <v-img :src="loadImg('voom表紙.jpg')"></v-img>
      </v-card>
    </v-row>
    <!-- <a
      href="http://localhost:8081/bibi/?book=maruyama.epub"
      data-bibi="embed"
      data-bibi-style="width: 50%; height: 400px;"
      >円山さん</a
    >
    <div is="script" src="http://localhost:8080/bibi/and/jo.js"></div>
    <v-row justify="center" class="mb-10">
      <v-btn @click="reset()">表示</v-btn>
    </v-row>
    <v-row justify="center" class="mb-10">
      <v-btn @click="doReloadWithCache()">表示2</v-btn>
    </v-row>
    <v-row justify="center">
      <a
        href="https://kucc-rokkofestival.herokuapp.com/bibi/?book=Miserables.epub"
        data-bibi="embed"
        data-bibi-style="width: 50%; height: 400px;"
        >普通</a
      >
    </v-row>
    <v-row justify="center">
      <a
        href="https://kucc-rokkofestival.herokuapp.com/bibi/?book=Miserables.epub"
        data-bibi="embed"
        data-bibi-style="width: 50%; height: 400px;"
        data-bibi-start-in-new-window="mobile"
        >モバイルのみウィンドウ表示</a -->
    >
    <!-- <a
        href="https://kucc-rokkofestival.herokuapp.com/bibi/?book=Miserables.epub"
      >
        <v-card>
          <v-img :src="imageurl" class="grey lighten-2"> </v-img> </v-card
      ></a> -->

    <!-- <div
        is="script"
        src="https://kucc-rokkofestival.herokuapp.com/bibi/and/jo.js"
      ></div> -->
    <!-- </v-row> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "offset",
  components: {},

  created() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://kucc-rokkofestival.herokuapp.com/bibi/and/jo.js"
    );
    document.head.appendChild(recaptchaScript);
  },
  methods: {
    loadImg(fileName) {
      return require(`@/assets/${fileName}`);
    },
    reset: function () {
      this.$router.go({ path: this.$router.currentRoute.path, force: true });
    },
    doReloadWithCache() {
      // キャッシュを利用してリロード
      window.location.reload(false);
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
