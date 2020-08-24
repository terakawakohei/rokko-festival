<template>
  <v-container py-10>
    <!-- <v-overlay absolute> -->
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
        data-width="400"
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
  </v-container>
</template>

<script>
export default {
  name: 'link',
};
</script>
<style>
.top {
  margin-top: 60%;
}
</style>
