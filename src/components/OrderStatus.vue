<template class="rounded-0">
  <v-card outlined class="rounded-0 text-center" min-width="560px">
    <v-card-title
      style="font-size: 16px; background-color: #2d3539; height: 39px"
      class="white--text pt-1"
    >
      주문 처리상태 변경
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-close</v-icon>
    </v-card-title>

    <v-card outlined class="rounded-0">
      <v-card-title style="font-size: 16px; height: 50px">
        변경할 주문 처리상태를 선택해주세요.
      </v-card-title>
      <v-card outlined class="mx-3 mb-5 rounded-0">
        <v-simple-table>
          <tbody>
            <tr style="height: 20px">
              <td
                style="
                  width: 160px;
                  background-color: #ecedef;
                  font-weight: bold;
                "
              >
                주문처리상태
              </td>
              <td class="pb-0">
                <v-select
                  v-model="order.purchaseState"
                  :items="status"
                  outlined
                  dense
                  single-line
                  color="#00C73C"
                  style="width: 250px"
                  class="rounded-0 pt-6"
                  >{{
                }}</v-select>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-card>
    <v-card
      flat
      tile
      style="background-color: #ecedef; border-top: solid 1px #dddddd"
    >
      <v-col class="d-flex justify-center">
        <v-btn
          depressed
          color="#00C73C"
          min-width="64"
          min-height="36"
          style="font-size: 14px; margin-top: 4px"
          class="pa-0 rounded-0 white--text mx-2"
          @click="put(order)"
        >
          변경</v-btn
        >
        <v-btn
          outlined
          depressed
          color="#00C73C"
          min-width="64"
          min-height="36"
          style="font-size: 14px; margin-top: 4px; background-color: white"
          class="pa-0 rounded-0 mx-2"
        >
          닫기
        </v-btn>
      </v-col>
    </v-card>
  </v-card>
</template>
<style>
.centered-input input {
  text-align: right;
}
</style>

<script>
export default {
  name: "order-status",
  props: ["order"],
  data: () => ({
    status: ["결제완료", "배송대기", "배송중", "배송완료"],
  }),
  methods: {
    put() {
      this.$emit("put", this.order);
    },
  },
};
</script>
