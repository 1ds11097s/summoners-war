<template>
  <v-img
    :src="getUseImage"
    max-height="200"
  />
</template>
<script>
import HeaderImage from "@/assets/image/header.webp"
import HeaderImageSp from "@/assets/image/headersp.png"
export default {
  computed: {
    getUseImage () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return HeaderImageSp
        case 'sm': return HeaderImageSp
        case 'md': return HeaderImage
        case 'lg': return HeaderImage
        case 'xl': return HeaderImage 
      }
    },
  }
}
</script>