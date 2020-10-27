<template>
  <v-container py-10>
    <!-- <v-overlay absolute> -->
    <v-row justify="center">
      <h1 class="display-1 font-weight-black">Web展示会へようこそ！</h1>
    </v-row>

    <v-row justify="center" cols="6" sm="6" md="3" lg="3" xl="3">
      <p class="body-1 font-weight-black">
        今年は、漫画研究会が例年行っている展示をオンラインで行います！
      </p>
    </v-row>

    <v-row justify="center">
      <h1 class="display-1 font-weight-black">パネル展</h1>
    </v-row>
    <v-row justify="center">
      <p class="body-1 font-weight-black">
        お題に沿って描かれたテーマパネル、部員が自由にテーマを決めて描くフリーパネルの二種類があります！
      </p>
    </v-row>
    <v-row space-around justify="center">
      <v-col
        v-for="(w, i) in works"
        :key="i"
        cols="6"
        sm="6"
        md="3"
        lg="3"
        xl="3"
      >
        <v-card>
          <div class="d-flex flex-no-wrap justify-center">
            <v-avatar class="ma-3" size="125" tile>
              <v-icon>mdi-star-four-points-outline</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-avatar color="grey darken-2" size="100">
        <v-icon>mdi-star-four-points-outline</v-icon>
      </v-avatar>
      <p class="body-1 font-weight-black">テーマ : 「星」</p>
    </v-row>
    <v-row justify="center">
      <v-avatar color="grey darken-2" size="100">
        <v-icon>mdi-emoticon-devil</v-icon>
      </v-avatar>
      <p class="title font-weight-bold mt-12 mb-7">オフセット本</p>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "description",
};
</script>
<style>
.top {
  margin-top: 60%;
}
</style>
