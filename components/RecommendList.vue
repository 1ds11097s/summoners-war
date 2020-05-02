<template>
  <YoutubeCardList :items="RecommendItems" colXs=12 colSm=12 colMd=3 colLg=3 />
</template>
<script>
import RecommendItems from '@/assets/recommend.json';
import YoutubeCardList from '~/components/YoutubeCardList.vue'
export default {
  components: {
    YoutubeCardList
  },
  data() {
    return {
      RecommendItems: RecommendItems,
    }
  }
}
</script>