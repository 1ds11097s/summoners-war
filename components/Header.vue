<template>
  <v-img
    :src="headerImage"
    max-height="200"
  />
</template>
<script>
import HeaderImage from "@/assets/image/header.webp"
export default {
  data() {
    return {
      headerImage: HeaderImage,
    }
  }
}
</script>