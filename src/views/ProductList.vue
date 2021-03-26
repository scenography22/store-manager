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
    <!-- 상품 목록 -->
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
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">상품명</th>
                <th class="text-center">상품코드</th>
                <th class="text-center">판매가</th>
                <th class="text-center">재고수량</th>
                <th class="text-center">상품URL</th>
                <th class="text-center">카테고리</th>
                <th class="text-center">상품등록일</th>
                <th class="text-center">최종수정일</th>
                <th class="text-center">요약설명</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.name">
                <td>{{ product.name }}</td>
                <td>{{ product.code }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.url }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.createdTime }}</td>
                <td>{{ product.modifiedTime }}</td>
                <td style="width: 300px">{{ product.shortDescription }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
import api from "../api/product";
export default {
  data: () => ({
    products: [],
  }),
  mounted() {
    // 목록조회 함수 호출
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const result = await api.list();
      console.log(result);
      console.log(result.data);
      console.log("------");
      if (result.status == 200) {
        this.products = result.data;
      }
    },
  },
};
</script>