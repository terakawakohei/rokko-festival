<template>
  <div>
    <v-sheet class="py-10 px-8 my-16" color="#78BBE6">
      <v-row justify="center">
        <v-col cols="9">
          <div class="font-weight-black text-center text-h4">
            #KUCC深夜の真剣お絵描き60分勝負
          </div>
        </v-col>
        <v-col cols="11">
          <p class=" font-weight-black text-center">
            新歓アカウントでは、#KUCC深夜の真剣お絵描き60分勝負というタグで部員のイラストが見られます！
          </p>
        </v-col>
      </v-row>

      <v-row justify="space-around">
        <v-col cols="12" md="5">
          <v-sheet
            class="pa-10"
            color="white lighten-3"
            rounded="xl"
            height="700"
          >
            <v-row justify="center" cols="6">
              <a
                class="twitter-timeline"
                data-width="300"
                data-height="600"
                data-theme="light"
                href="https://twitter.com/kucc_shinkan20?ref_src=twsrc%5Etfw"
                >Tweets by kucc_shinkan20</a
              >
              <div
                is="script"
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></div>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
    <!-- <v-container py-10>
    
      <v-row justify="center">
        <h1 class="display-1 font-weight-black">外部リンク</h1>
      </v-row>

      <v-row justify="center" cols="6">
        <p class="body-1 font-weight-black">
          新歓アカウントでは、#KUCC深夜の真剣お絵描き60分勝負というタグで部員のイラストがみられます！
        </p>
      </v-row>
      <v-row justify="center" cols="6">
        <a
          class="twitter-timeline"
          data-width="200"
          data-height="600"
          data-theme="light"
          href="https://twitter.com/kucc_shinkan20?ref_src=twsrc%5Etfw"
          >Tweets by kucc_shinkan20</a
        >
        <div
          is="script"
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></div>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
export default {
  name: "link",
};
</script>
<style>
.top {
  margin-top: 60%;
}
</style>
