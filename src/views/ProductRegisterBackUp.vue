<template>
  <div>
    <v-card>
      <v-card-title
        >상품 등록<span style="font-size: 100">필수항목</span></v-card-title
      >
    </v-card>
    <v-divider />
    <v-expansion-panels v-model="panel" multiple flat hover>
      <v-expansion-panel>
        <v-expansion-panel-header>상품명</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field
            label="예) 나이키 에어맥스 97"
            single-line
            outlined
          ></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>상품번호</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field single-line outlined></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>판매가</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field single-line outlined></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data: () => ({
    panel: [0, 1, 2, 3, 4, 5, 6],
  }),
};
</script>