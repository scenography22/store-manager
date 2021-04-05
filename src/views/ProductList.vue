<template>
  <div>
    <v-card outlined class="mb-3 rounded-0">
      <v-card-title class="font-weight-black">
        <span>상품 조회 / 수정</span>
        <v-icon style="color: grey">mdi-help-circle-outline</v-icon>
      </v-card-title>
    </v-card>
    <!-- <v-card outlined class="mb-3 rounded-0">
      <v-card-title class="font-weight-black">
        <span>-- 검색창 --</span>
      </v-card-title>
    </v-card> -->
    <search-product> </search-product>
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
          @click="deleteProduct()"
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
          @click="goToProductRegister()"
        >
          상품등록</v-btn
        >
      </v-col>

      <v-card outlined class="mx-3 mb-3 rounded-0 text-center">
        <v-simple-table>
          <template>
            <thead>
              <tr>
                <th class="text-center tb">
                  <!-- <input type="checkbox" /> -->
                </th>
                <th class="text-center">상품명</th>
                <th class="text-center">상품코드</th>
                <th class="text-center">판매가</th>
                <th class="text-center">재고수량</th>
                <th class="text-center">카테고리</th>
                <th class="text-center">요약설명</th>
                <th class="text-center">상품등록일</th>
                <th class="text-center">최종수정일</th>
              </tr>
            </thead>
            <tbody style="height: 300px">
              <tr v-for="(product, i) in products" :key="i">
                <td>
                  <input type="checkbox" />
                </td>

                <v-menu top right :close-on-content-click="closeOnContentClick">
                  <template v-slot:activator="{ on }">
                    <td>
                      <span
                        v-on="on"
                        style="text-decoration: underline"
                        class="mtdetail"
                        >{{ product.name }}</span
                      >
                    </td>
                  </template>
                  <product-detail
                    :product="product"
                    @del="deleteProduct"
                    @put="modifyProduct"
                  ></product-detail>
                </v-menu>
                <td>{{ product.code }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.category }}</td>
                <td style="width: 300px">{{ product.shortDescription }}</td>
                <td>{{ product.createdTime }}</td>
                <td>{{ product.modifiedTime }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-card>
  </div>
</template>
<style>
img {
  width: 100%;
}
.vrow {
  min-height: 136px;
}
.vcol {
  margin-top: 36px;
}
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
input:checked {
  background-color: pink;
}
.mtdetail:hover {
  color: #00c73c;
  cursor: pointer;
}
</style>

<script>
import SearchProduct from "../components/SearchProduct.vue";
import ProductDetail from "../components/ProductDetail.vue";
import api from "../api/product";
export default {
  components: {
    ProductDetail,
    SearchProduct,
  },
  data: () => ({
    categories: ["육류", "반찬", "야채/과일"],
    category: "",
    name: "",
    code: "",
    price: "",
    quantity: "",
    shortDescription: "",
    description: "",
    images: [],
    products: [],
    rules: {
      required: (value) => !!value || "필수 항목입니다.",
      counter: (value) =>
        (!!value && value.length <= 250) || "최대 250자까지 가능합니다.",
      minimumPrice: (value) => value >= 10 || "최소 10원 이상 입력해주세요.",
    },
    closeOnContentClick: false,
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
      console.log(this.images);
      if (result.status == 200) {
        this.products = result.data;
      }
    },
    async deleteProduct(product) {
      console.log("product.id : " + product.id);
      const result = await api.del(product.id);
      console.log(result);
      console.log(result.data);

      // 서버에서 정상적으로 DB에 삭제를 했으면
      if (result.status == 200) {
        //화면에 바인딩된 배열에서 삭제
        this.products.splice(product, 1);
        this.$router.go(0);
      }
    },
    async modifyProduct(product) {
      console.log("product.id : " + product.id);
      const result = await api.put(
        product.id,
        product.code,
        product.category,
        product.name,
        product.price,
        product.quantity,
        product.shortDescription,
        product.description
      );
      console.log(result);
      console.log(result.data);

      if (result.status == 200) {
        this.products = result.data;
        this.$router.go(0);
      }
    },
    goToProductRegister() {
      this.$router.push("/productregister");
    },
  },
};
</script>