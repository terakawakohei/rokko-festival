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
            例年、部員の描いたイラストや漫画をオフセット本として六甲祭で販売しています。
          </p>
          <p class=" font-weight-black text-center">
            今年は電子書籍の形で公開します！
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

    <v-sheet class="py-15 px-8" color="grey lighten-3">
      <!-- <v-overlay absolute> -->

      <v-row justify="space-around">
        <v-col cols="12" md="5">
          <v-sheet
            class="pa-10"
            color="white lighten-3"
            rounded="xl"
            height="730"
          >
            <v-row justify="center">
              <v-col cols="9">
                <div class="font-weight-black text-center text-h5 pb-4">
                  みーはー
                </div>
              </v-col>
              <v-col cols="11">
                <p class=" font-weight-black text-center">
                  部員の描いた漫画、小説が収録されています
                </p>
              </v-col>
            </v-row>
            <div></div>

            <v-row align="center" justify="space-around">
              <v-card
                href="https://kucc-rokko-festival.herokuapp.com/bibi/?book=みーはー176ver2.epub"
                max-width="250"
              >
                <v-img :src="loadImg('みーはー表紙.jpg')"></v-img>
              </v-card>
            </v-row>
            <v-row justify="center" class="pt-8">
              <p class=" font-weight-thin text-caption text-center">
                ※wifi環境下での閲覧をお勧めします
              </p>
              <v-col cols="11">
                <p class=" font-weight-black text-center text-subtitle-2">
                  みーはーに関する感想はこちらから!
                </p>
              </v-col>

              <Impressions type="mi-ha-" />
            </v-row>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="5">
          <v-sheet
            class="pa-10"
            color="white lighten-3"
            rounded="xl"
            height="730"
          >
            <v-row justify="center">
              <v-col cols="9">
                <div class="font-weight-black text-center text-h5 pb-4">
                  voom+
                </div>
              </v-col>
              <v-col cols="11">
                <p class=" font-weight-black text-center">
                  お題「悪魔」に沿ったイラストが収録されています
                </p>
              </v-col>
            </v-row>
            <div></div>

            <v-row align="center" justify="space-around">
              <v-card
                href="https://kucc-rokko-festival.herokuapp.com/bibi/?book=voom+ver1.epub"
                max-width="250"
              >
                <v-img :src="loadImg('voom表紙.jpg')"></v-img>
              </v-card>
            </v-row>
            <v-row justify="center" class="pt-8">
              <p class=" font-weight-thin text-caption text-center">
                ※wifi環境下での閲覧をお勧めします
              </p>
              <v-col cols="11">
                <p class=" font-weight-black text-center text-subtitle-2">
                  voomに関する感想はこちらから!
                </p>
              </v-col>

              <Impressions type="voom" />
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
      <Questionnaire />
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

    <!-- <a
        href="https://kucc-rokkofestival.herokuapp.com/bibi/?book=Miserables.epub"
      >
        <v-card>
          <v-img :src="imageurl" class="grey lighten-2"> </v-img> </v-card
      ></a> -->

    <div
      is="script"
      src="https://kucc-rokkofestival.herokuapp.com/bibi/and/jo.js"
    ></div>
    <!-- </v-row> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Impressions from "@/components/impressions.vue";
import Questionnaire from "@/components/questionnaire.vue";
export default {
  name: "offset",
  components: {
    Impressions,
    Questionnaire,
  },

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
