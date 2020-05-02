<template>
  <YoutuberCardList :items="YoutuberItems" colXs=3 colSm=3 colMd=2 colLg=2 />
</template>
<script>
import YoutuberItems from '@/assets/youtuber.json';
import YoutuberCardList from '~/components/YoutuberCardList.vue'
export default {
  components: {
    YoutuberCardList
  },
  data() {
    return {
      YoutuberItems: YoutuberItems,
    }
  }
}
</script>