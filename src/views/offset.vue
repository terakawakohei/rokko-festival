<template>
  <div>
    <v-sheet class="py-10 px-8 my-16" color="grey lighten-3">
      <v-row justify="center">
        <v-col cols="9">
          <div class="font-weight-black text-center text-h4">
            漫研部誌
          </div>
        </v-col>
        <v-col cols="11">
          <p class=" font-weight-black text-center">
            例年、部員描いたイラストや漫画をオフセット本として六甲祭で販売しています！
          </p>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col cols="12" md="5">
          <v-sheet
            class="pa-10"
            color="white lighten-3"
            rounded="xl"
            height="200"
          >
            <div></div>
            <v-sheet rounded="xl" class="mx-auto" height="100" width="100">
              <v-row align="center" justify="space-around">
                <v-icon x-large color="orange">mdi-emoticon-devil</v-icon>
              </v-row></v-sheet
            >

            <div></div>
            <p class=" font-weight-black text-center">
              今年のテーマは「悪魔」です
            </p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet class="py-10 px-8" color="grey lighten-3">
      <!-- <v-overlay absolute> -->
      <v-row justify="center">
        <v-col cols="9">
          <div class="font-weight-black text-center text-h4">
            パネル展
          </div>
        </v-col>
        <v-col cols="11">
          <p class=" font-weight-black text-center">
            お題に沿って描かれたテーマパネル、部員が自由にテーマを決めて描くフリーパネルの二種類があります！
          </p>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col cols="12" md="5">
          <v-sheet
            class="pa-10"
            color="white lighten-3"
            rounded="xl"
            height="500"
          >
            <div class=" font-weight-black text-center text-h6 pb-4">
              みーはー
            </div>
            <div></div>

            <v-row align="center" justify="space-around">
              <v-card
                href="https://kucc-rokkofestival.herokuapp.com/bibi/?book=contents.epub"
                width="50%"
              >
                <v-img :src="loadImg('みーはー表紙.jpg')"></v-img>
              </v-card>
            </v-row>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="5">
          <v-sheet
            class="pa-10"
            color="white lighten-3"
            rounded="xl"
            height="500"
          >
            <div class=" font-weight-black text-center text-h6 pb-4">
              voom+
            </div>
            <div></div>

            <v-row align="center" justify="space-around">
              <v-card
                href="https://kucc-rokkofestival.herokuapp.com/bibi/?book=Miserables.epub"
                width="50%"
              >
                <v-img :src="loadImg('voom表紙.jpg')"></v-img>
              </v-card>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>

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
    reset: function() {
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
