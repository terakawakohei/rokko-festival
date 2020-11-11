<template>
  <div>
    <v-card @click.stop="dialog = true">
      <v-img
        :src="loadImg(work.fileName)"
        aspect-ratio="1"
        class="grey lighten-2"
      >
      </v-img>

      <v-card-text>
        {{ work.title }}
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="700">
      <v-card>
        <v-img
          max-height="600"
          contain
          :src="loadImg(work.fileName)"
          class="grey lighten-2"
        >
        </v-img>
        <v-row justify="center">
          <v-card-title>{{ work.title }}</v-card-title>
        </v-row>
        <v-divider class="mx-4 mb-2"></v-divider>
        <v-card-text class="pb-0">
          <v-row justify="center">
            {{ work.grade }}回生 {{ work.penname }}
          </v-row>
          <v-row justify="center">
            {{ work.tool }}
          </v-row>
          <v-divider class="mb-4 my-2"></v-divider>
          <v-row class="ml-2">
            {{ work.caption }}
          </v-row>
          <v-divider class="mt-4 my-2"></v-divider>
          <v-row justify="center">
            <v-btn
              @click="vote()"
              :disabled="voteDisabled"
              class="white--text"
              color="#F99F48"
            >
              <v-icon>mdi-vote</v-icon>
              <div>投票する</div>
            </v-btn>
          </v-row>
        </v-card-text>
        <v-divider class="mx-4 my-2"></v-divider>
        <v-textarea
          prepend-inner-icon="mdi-comment"
          class="pt-2 mx-2"
          filled
          auto-grow
          label="コメント"
          rows="2"
          row-height="20"
          v-model="comment"
        ></v-textarea>

        <v-btn
          v-if="comment != ''"
          @click="sendComment()"
          :disabled="sendDisabled"
          block
          color="#F99F48"
        >
          <span class="white--text">送信する</span>
          <v-icon color="white">mdi-send</v-icon>
        </v-btn>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" @click="dialog = false" text
            >閉じる</v-btn
          >

          <!-- <v-btn text small disabled>
            コメントする
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import theme from "@/assets/theme/theme.json";

export default {
  data: () => ({
    dialog: false,
    voteDisabled: false,
    sendDisabled: false,
    timeout: 3000,
    works: theme,
    comment: "",
  }),
  props: {
    work: Object,
    workId: Number,
    type: String,
  },
  methods: {
    loadImg(fileName) {
      return require(`@/assets/${this.type}/${fileName}`);
    },
    vote() {
      this.voteDisabled = true;
      this.axios
        .get(
          `https://rokko-festival-server.herokuapp.com/vote/${this.type}/${this.workId}`
        )
        .then((response) => {
          console.log(response.data);

          if (response.data > 0) {
            console.log("putが走ってる");
            this.axios.put(
              `https://rokko-festival-server.herokuapp.com/vote/${this.type}/${this.workId}`
            );
          } else {
            console.log("postが走ってる");
            this.axios.post(
              `https://rokko-festival-server.herokuapp.com/vote/${this.type}/${this.workId}`
            );
          }
        });
      this.$store.dispatch("setMessage", "投票しました");
      this.$store.dispatch("snackOn");
    },
    sendComment() {
      if (this.comment != "") {
        this.axios.post(
          `https://rokko-festival-server.herokuapp.com/comment/${this.type}/${this.workId}/${this.comment}`
        );
        this.$store.dispatch("setMessage", "送信しました");
        this.$store.dispatch("snackOn");
        this.sendDisabled = true;
        this.comment = "";
      }
    },
  },
  mounted: function() {},
  // async comment(words) {
  // 	await this.$axios.put('/api/v1/student/' + this.data.StudentID, {
  // 		DeletedAt: null,
  // 	});
  // 	this.$notify({
  // 		type: 'success',
  // 		title: '成功しました',
  // 	});
  // 	this.showing = false;
  // 	this.$store.dispatch('downloadResource', 'Student');
  // 	this.$eventBus.$emit('reload');
  // },
  computed: {
    menuSelection: function() {
      return this.$store.state.menuSelection;
    },
  },
  watch: {
    menuSelection(val) {
      if (val == this.workId) this.dialog = true;
    },
  },
};
</script>
<style scoped>
.v-data-table td {
  white-space: pre-line;
}
</style>
