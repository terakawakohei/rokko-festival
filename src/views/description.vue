<template>
  <div>
    <v-container py-10>
      <v-row justify="center" class="py-16">
        <v-col cols="9" class="py-10">
          <div class="font-weight-black text-center text-h4">
            Web展示会へようこそ！
          </div>
        </v-col>
        <div></div>
        <v-col cols="11" class="pt-16">
          <p class=" font-weight-black text-center">
            今年は、漫画研究会が例年行っている展示をオンラインで行います！
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- パネル展説明 -->

    <v-sheet class="py-10 px-8" color="#D5EEFF">
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
            height="350"
          >
            <div class=" font-weight-black text-center text-h6 pb-4">
              テーマパネル
            </div>
            <div></div>
            <v-sheet rounded="xl" class="mx-auto" height="100" width="100">
              <v-row align="center" justify="space-around">
                <v-icon x-large color="orange">mdi-weather-night</v-icon>
              </v-row></v-sheet
            >

            <div></div>
            <p class=" font-weight-black text-center">
              今年のテーマは「星」です
            </p>
            <v-row align="center" justify="space-around">
              <router-link to="/theme" tag="button">
                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="#78BBE6"
                  class="ma-2 white--text font-weight-medium"
                  @click="loader = 'loading3'"
                >
                  テーマパネルを見る
                  <v-icon right dark>
                    mdi-arrow-right-bold
                  </v-icon>
                </v-btn></router-link
              >
            </v-row>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="5">
          <v-sheet
            class="pa-10"
            color="white lighten-3"
            rounded="xl"
            height="350"
          >
            <div class=" font-weight-black text-center text-h6 pb-4">
              フリーパネル
            </div>
            <div></div>
            <v-sheet rounded="xl" class="mx-auto" height="100" width="100">
              <v-row align="center" justify="space-around">
                <v-icon x-large color="orange">mdi-brush</v-icon>
              </v-row></v-sheet
            >

            <div></div>
            <p class=" font-weight-black text-center">
              フリーパネルでは、部員の自由なテーマの作品が見られます！
            </p>
            <v-row align="center" justify="space-around">
              <router-link to="/free" tag="button">
                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="#78BBE6"
                  class="ma-2 white--text font-weight-medium"
                  @click="loader = 'loading3'"
                >
                  フリーパネルを見る
                  <v-icon right dark>
                    mdi-arrow-right-bold
                  </v-icon>
                </v-btn></router-link
              >
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- オフセ本説明 -->

    <v-sheet class="py-10 px-8 my-16" color="#D5EEFF">
      <v-row justify="center">
        <v-col cols="9">
          <div class="font-weight-black text-center text-h4">
            漫研部誌
          </div>
        </v-col>
        <v-col cols="11">
          <p class=" font-weight-black text-center">
            部員の描いたモノクロのイラストや漫画が読めます！
          </p>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col cols="12" md="5">
          <v-sheet
            class="pa-10"
            color="white lighten-3"
            rounded="xl"
            height="400"
          >
            <div></div>
            <p class=" font-weight-black text-center">
              今年のテーマは「悪魔」です
            </p>
            <div></div>
            <v-sheet rounded="xl" class="mx-auto" height="50" width="100">
              <v-row align="center" justify="space-around">
                <v-icon x-large color="orange">mdi-emoticon-devil</v-icon>
              </v-row></v-sheet
            >

            <v-row align="center" justify="space-around">
              <v-card elevation="0" max-width="250">
                <v-img :src="loadImg('オフセ.png')"></v-img>
              </v-card>
            </v-row>
            <v-row align="center" justify="space-around">
              <router-link to="/offset" tag="button">
                <v-btn
                  :loading="loading3"
                  :disabled="loading3"
                  color="#78BBE6"
                  class="ma-2 white--text font-weight-medium"
                  @click="loader = 'loading3'"
                >
                  部誌を見る
                  <v-icon right dark>
                    mdi-arrow-right-bold
                  </v-icon>
                </v-btn></router-link
              >
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "description",
  methods: {
    loadImg(fileName) {
      return require(`@/assets/${fileName}`);
    },
  },
};
</script>
<style>
.top {
  margin-top: 60%;
}
</style>
