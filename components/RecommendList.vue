<template>
  <YoutubeCardList :items="RecommendItems" col=3 />
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