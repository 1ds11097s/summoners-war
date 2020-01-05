<template>
  <v-toolbar
    :src="headerImage"
    class="header-style"
    height="270"
    max-height="270"
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