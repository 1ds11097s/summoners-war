<template>
  <v-layout>
    <v-row class="main-menu-background" justify="space-between" align-content="center">
      <v-col cols="4" class="column-1 column column-font column-size">初心者必見Tips</v-col>
      <v-col cols="4" class="column-2 column column-font column-size">ギルドバトル・占領戦</v-col>
      <v-col cols="4" class="column-3 column column-font column-size">タワー</v-col>
      <v-col cols="4" class="column-4 column column-font column-size">ワリーナ</v-col>
      <v-col cols="4" class="column-5 column column-font column-size">ブログ</v-col>
      <v-col cols="4" class="column-6 column column-font column-size">ダンジョン</v-col>
    </v-row>    
  </v-layout>
</template>
<style>
.main-menu-background {
    margin-top: 280px;
}
.column-size {
  min-height: 200px;
  background-size: contain;
}
.column-font {
  color: #fff;
  font-weight: bold;
  font-size: 32px;
}
.column-1 {
  background-image: url("../assets/image/column1.png");
}
.column-2 {
  background-image: url("../assets/image/column2.png");
}
.column-3 {
  background-image: url("../assets/image/column3.png");
}
.column-4 {
  background-image: url("../assets/image/column4.png");
}
.column-5 {
  background-image: url("../assets/image/column5.png");
}
.column-6 {
  background-image: url("../assets/image/column6.png");
}
</style>