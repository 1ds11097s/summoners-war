<template>
  <v-toolbar
    dark
    prominent
    :src="headerImage"
    class="header-style"
    height="270"
  >
    <v-toolbar-title></v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>
import HeaderImage from "@/assets/image/summoners-war-header.png";
export default {
  data() {
    return {
      headerImage: HeaderImage,
    };
  }
};
</script>
<style>
.header-style {
  position: fixed;
  top: 0;
  width: 100%;
  
}
</style>