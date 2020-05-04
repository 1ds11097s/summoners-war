<template>
  <YoutubeCardList :items="NewWorldItems" colXs=12 colSm=12 colMd=3 colLg=3 />
</template>
<script>
import NewWorldItems from '@/assets/newWorld.json';
import YoutubeCardList from '~/components/YoutubeCardList.vue'
export default {
  components: {
    YoutubeCardList
  },
  data() {
    return {
      NewWorldItems: NewWorldItems,
    }
  }
}
</script>