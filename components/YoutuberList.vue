<template>
  <YoutuberCardList :items="YoutuberItems" col=2 />
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