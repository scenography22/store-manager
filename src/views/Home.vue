<template>
  <div>
    <!--반응형 grid layout 컨테이너-->
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-card
            outlined
            tile
            style="height: 150px; margin-top: 16px"
            elevation="3"
          >
            <v-row align="center">
              <v-col class="display-3" cols="6">
                <v-sheet
                  class="v-sheet--offset mx-auto text-center"
                  style="margin-left: -50px"
                  color="#"
                  elevation="3"
                  width="140"
                >
                  <v-avatar color="#00C73C" size="140" tile>
                    <v-icon size="64" dark
                      >mdi-credit-card-check-outline</v-icon
                    >
                  </v-avatar>
                </v-sheet>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-card-text style="font-size: 36px; font-weight: bold"
                  >10</v-card-text
                >
                <v-card-text style="font-size: 18px; color: #00c73c"
                  >결제완료</v-card-text
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card
            outlined
            tile
            style="height: 150px; margin-top: 16px"
            elevation="3"
          >
            <v-row align="center">
              <v-col class="display-3" cols="6">
                <v-sheet
                  class="v-sheet--offset mx-auto text-center"
                  style="margin-left: -50px"
                  color="#"
                  elevation="3"
                  width="140"
                >
                  <v-avatar color="#00C73C" size="140" tile>
                    <v-icon size="64" dark>mdi-truck</v-icon>
                  </v-avatar>
                </v-sheet>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-card-text style="font-size: 36px; font-weight: bold"
                  >0</v-card-text
                >
                <v-card-text style="font-size: 18px; color: #00c73c"
                  >배송대기</v-card-text
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card
            outlined
            tile
            style="height: 150px; margin-top: 16px"
            elevation="3"
          >
            <v-row align="center">
              <v-col class="display-3" cols="6">
                <v-sheet
                  class="v-sheet--offset mx-auto text-center"
                  style="margin-left: -50px"
                  color="#"
                  elevation="3"
                  width="140"
                >
                  <v-avatar color="#00C73C" size="140" tile>
                    <v-icon size="64" dark>mdi-truck-fast</v-icon>
                  </v-avatar>
                </v-sheet>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-card-text style="font-size: 36px; font-weight: bold"
                  >2</v-card-text
                >
                <v-card-text style="font-size: 18px; color: #00c73c"
                  >배송중</v-card-text
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card
            outlined
            tile
            style="height: 150px; margin-top: 16px"
            elevation="3"
          >
            <v-row align="center">
              <v-col class="display-3" cols="6">
                <v-sheet
                  class="v-sheet--offset mx-auto text-center"
                  style="margin-left: -50px"
                  color="#"
                  elevation="3"
                  width="140"
                >
                  <v-avatar color="#00C73C" size="140" tile>
                    <v-icon size="64" dark>mdi-truck-check</v-icon>
                  </v-avatar>
                </v-sheet>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-card-text style="font-size: 36px; font-weight: bold"
                  >1</v-card-text
                >
                <v-card-text style="font-size: 18px; color: #00c73c"
                  >배송완료</v-card-text
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-card outlined height="500" tile elevation="3"
            ><v-card-title
              style="font-size: 16px; font-weight: bold; height: 60px"
            >
              스토어 결제금액 통계
            </v-card-title>
            <v-divider></v-divider>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card outlined height="500" tile elevation="3"
            ><v-card-title
              style="font-size: 16px; font-weight: bold; height: 60px"
            >
              스토어 결제건수 통계
            </v-card-title>
            <v-divider></v-divider
          ></v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.v-sheet--offset {
  top: -18px;
  position: relative;
}
</style>

<script>
export default {
  data: () => ({}),
};
</script>
