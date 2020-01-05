<template>
  <v-img
    :src="headerImage"
  />
</template>
<script>
import HeaderImage from "@/assets/image/summoners-war-header-sp.png";
export default {
  data() {
    return {
      headerImage: HeaderImage,
    };
  }
};
</script>
<style>
.tesr {
    width:100%;
}
</style>