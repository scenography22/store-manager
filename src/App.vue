<template>
  <v-app>
    <v-app-bar app color="#2D3539" dark clipped-left>
      <div class="goHome ml-5" @click="goHome()">
        <v-toolbar-title>STORE MANAGER</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        href="http://yeeun-store.s3-website.ap-northeast-2.amazonaws.com/#/fresh"
        target="_blank"
        text
      >
        <v-icon>mdi-store</v-icon>
        <span class="ml-2"> 쇼핑몰 바로가기</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer dark app clipped width="240" color="#445163">
      <v-list class="pb-0">
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
          color="white"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(item, i) in item.items"
            :key="i"
            @click="navigateTo(item)"
            style="background-color: #414958"
          >
            <v-list-item-content>
              <v-list-item-title
                v-text="item.title"
                style="color: white"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main style="background-color: #edf0f5">
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
.goHome:hover {
  cursor: pointer;
}
</style>


<script>
export default {
  name: "App",

  data: () => ({
    items: [
      {
        action: "mdi-tshirt-crew",
        items: [
          { title: "상품 등록", path: "/productregister" },
          { title: "상품 목록", path: "/productlist" },
        ],
        title: "상품관리",
      },
      {
        action: "mdi-cart",
        items: [{ title: "주문 목록", path: "/orderlist" }],
        title: "주문관리",
      },
    ],
  }),
  methods: {
    navigateTo(item) {
      /* https://router.vuejs.org/kr/guide/essentials/navigation.html */
      // 현재 경로와 다르면
      if (this.$route.path != item.path) {
        // 라우터에 경로 추가
        this.$router.push(item.path);
      }
    },
    goHome() {
      if (this.$route.path != "/") {
        // 라우터에 경로 추가
        this.$router.push("/");
      }
      //  this.$router.push("/");
    },
  },
};
</script>
