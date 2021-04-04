
<template>
  <v-card outlined class="mb-3 rounded-0">
    <v-row>
      <v-col cols="1" class="my-auto">
        <v-subheader style="text-align: right">검색 분류</v-subheader>
      </v-col>
      <v-col cols="2" class="mt-7"
        ><v-select
          v-model="cf"
          :items="classification"
          outlined
          dense
          single-line
          style="width: 200px"
          class="rounded-0"
        ></v-select>
      </v-col>
      <v-col cols="9" class="mt-7"
        ><v-text-field
          dense
          outlined
          single-line
          color="#00C73C"
          class="rounded-0"
          height="30px"
          style="width: 300px"
        ></v-text-field>
      </v-col>
    </v-row>
    <!-- <v-divider inset></v-divider> -->
    <v-row>
      <v-col cols="1" class="my-auto">
        <v-subheader>카테고리</v-subheader>
      </v-col>
      <v-col cols="2" class="mt-7"
        ><v-select
          v-model="cg"
          :items="categories"
          outlined
          dense
          single-line
          style="width: 200px"
          class="rounded-0"
        ></v-select>
      </v-col>
      <v-divider vertical inset></v-divider>
      <v-col cols="1" class="my-auto">
        <v-subheader>상품등록일</v-subheader>
      </v-col>
      <v-col cols="8" class="mt-7">
        <v-btn-toggle dense color="#00C73C" v-model="button_group">
          <v-btn> 오늘 </v-btn>
          <v-btn> 1주일 </v-btn>
          <v-btn> 1개월 </v-btn>
          <v-btn> 3개월 </v-btn>
          <v-btn> 6개월 </v-btn>
          <v-btn> 1년 </v-btn>
          <v-btn> 전체 </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-col class="d-flex justify-center">
      <v-btn
        depressed
        color="#00C73C"
        min-width="80"
        min-height="36"
        style="font-size: 14px; margin-top: 4px"
        class="pa-0 rounded-0 white--text mx-2"
      >
        검색</v-btn
      >
      <v-btn
        outlined
        depressed
        min-width="80"
        min-height="36"
        style="font-size: 14px; margin-top: 4px"
        class="pa-0 rounded-0 mx-2"
      >
        초기화
      </v-btn>
    </v-col>
  </v-card>
</template>
<script>
export default {
  name: "search-product",
  props: ["product"],
  data: () => ({
    cf: "상품명",
    classification: ["상품명", "상품코드"],
    cg: "카테고리 선택",
    categories: ["육류", "반찬", "야채/과일"],
    button_group: 6,
  }),
  methods: {},
};
</script>
