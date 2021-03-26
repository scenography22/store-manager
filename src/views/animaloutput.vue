<template>
  <div>
    <div class="btnOutBox">
      <v-btn class="btna" @click="moveToWriteForm">글쓰기</v-btn>
    </div>
    <v-row no-gutters>
      <v-col
        v-for="(review, i) in reviews"
        :key="i"
        :review="review"
        :index="i"
        cols="12"
        sm="4"
      >
        <v-card
          @click="moveToDetail(review)"
          class="mx-auto my-12"
          max-width="374"
        >
          <div class="mainPicDiv">
            <v-img
              v-if="review.files.length > 0"
              class="mainPic"
              :src="review.files[0].dataUrl"
            ></v-img>
            <v-img
              v-if="review.files.length == 0"
              class="mainPic"
              src="https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"
            ></v-img>
          </div>
          <div>
            <v-card-title>{{ review.title }}</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-title>{{ review.nickname }}</v-card-title>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-container style="width: 300px">
      <v-text-field
        outlined
        label="작성자를 입력하시오"
        append-icon="mdi-map-marker"
        class="input"
        @click:append="moveToSearch()"
      ></v-text-field>
    </v-container>
  </div>
</template>

<style lang="scss">
@import "../reset.css";
.input {
  text-align: center;
}
.btna {
  margin-top: 20px;
  width: 50px;
}
.btnOutBox {
  width: 100%;
  text-align: center;
}
.mainPicDiv {
  width: 375px;
  height: 200px;
  overflow: hidden;
}
.mainPic {
  width: 100%;
  height: 100%;
}
</style>

<script>
import api from "../api/review";
export default {
  data: () => ({
    title: "",
    nickname: "",
    password: "",
    files: [],
    post: [],
    reviews: [],
  }),
  mounted() {
    // 목록조회 함수 호출
    this.getReviews();
  },
  methods: {
    moveToWriteForm() {
      this.$router.push("/WriteForm");
    },
    moveToDetail(review) {
      const nickname = review.nickname;
      this.$router.push("/ReviewDetail/" + nickname);
    },

    async getReviews() {
      const result = await api.list();
      console.log(result);
      console.log(result.data);
      console.log("------");
      if (result.status == 200) {
        this.reviews = result.data;
      }
    },
  },
};
</script>