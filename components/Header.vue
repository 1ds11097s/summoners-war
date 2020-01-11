<template>
  <v-img
    :src="headerImage"
    max-height="350"
  />
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