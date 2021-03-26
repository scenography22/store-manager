<template>
  <div>
    <v-card outlined class="mb-3 rounded-0">
      <v-card-title class="font-weight-black">
        <span>상품 조회 / 수정</span>
        <v-icon style="color: grey">mdi-help-circle-outline</v-icon>
      </v-card-title>
    </v-card>
    <v-card outlined class="mb-3 rounded-0">
      <v-card-title class="font-weight-black">
        <span>-- 검색창 --</span>
      </v-card-title>
    </v-card>
    <v-card outlined class="rounded-0">
      <v-card-title class="font-weight-black"> 상품 목록 </v-card-title>
      <v-divider></v-divider>
      <v-col class="d-flex justify-space-between">
        <v-btn
          outlined
          depressed
          min-width="80"
          min-height="36"
          style="font-size: 14px; margin-top: 4px"
          class="pa-0 rounded-0"
        >
          선택삭제
        </v-btn>
        <v-btn
          depressed
          color="#00C73C"
          min-width="80"
          min-height="36"
          style="font-size: 14px; margin-top: 4px"
          class="pa-0 rounded-0 white--text"
        >
          상품등록</v-btn
        >
      </v-col>
      <v-card outlined class="mx-3 mb-3 rounded-0 text-center">
        <v-data-table
          :headers="headers"
          :items="desserts"
          show-select
          hide-default-footer
        >
        </v-data-table>
      </v-card>
    </v-card>
  </div>
</template>
<style>
.v-btn--outlined {
  border: thin solid #cccccc;
}
td {
  border-right: 1px solid #cccccc;
}
th {
  border-right: 1px solid #cccccc;
  background-color: #f8f9fd;
}
</style>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "상품명",
        value: "name",
        sortable: false,
        width: "260px",
      },
      {
        text: "판매가",
        value: "price",
        sortable: false,
        width: "150px",
      },
      {
        text: "재고수량",
        value: "quantity",
        sortable: false,
        width: "150px",
      },
      {
        text: "상품URL",
        value: "url",
        sortable: false,
        width: "300px",
      },
      {
        text: "카테고리",
        value: "category",
        sortable: false,
        width: "120px",
      },
      {
        text: "상품등록일",
        value: "createdTime",
        sortable: false,
        width: "120px",
      },
      {
        text: "최종수정일",
        value: "modifiedTime",
        sortable: false,
        width: "120px",
      },
      {
        text: "요약설명",
        value: "shortDescription",
        sortable: false,
        width: "120px",
      },
    ],
    desserts: [
      {
        name: "토이스토리",
        price: 50000,
        quantity: 10,
        url: "https://aaa.com",
        category: "반찬",
        createdTime: "2021-03-24",
        modifiedTime: "2021-03-25",
        shortDescription: "가나다",
      },
    ],
  }),
};
</script>