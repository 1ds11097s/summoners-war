<template>
  <YoutuberCardList :items="YoutuberWorldItems" colXs=3 colSm=3 colMd=2 colLg=2 />
</template>
<script>
import YoutuberWorldItems from '@/assets/youtuberWorld.json';
import YoutuberCardList from '~/components/YoutuberCardList.vue'
export default {
  components: {
    YoutuberCardList
  },
  data() {
    return {
      YoutuberWorldItems: YoutuberWorldItems,
    }
  }
}
</script>