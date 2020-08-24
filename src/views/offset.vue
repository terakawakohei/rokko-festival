<template>
  <div>
    <v-row justify="center">
      <h1 class="display-1 font-weight-black">オフセット本</h1>
    </v-row>
    <a
      href="https://kucc-rokkofestival.herokuapp.com/bibi/?book=Miserables.epub"
      data-bibi="embed"
      >レミゼラブル</a
    >
    <div
      is="”script”"
      src="https://kucc-rokkofestival.herokuapp.com/bibi/and/jo.js"
    ></div>
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
