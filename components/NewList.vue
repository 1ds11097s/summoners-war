<template>
  <YoutubeCardList :items="NewItems" colXs=12 colSm=12 colMd=3 colLg=3 />
</template>
<script>
import NewItems from '@/assets/new.json';
import YoutubeCardList from '~/components/YoutubeCardList.vue'
export default {
  components: {
    YoutubeCardList
  },
  data() {
    return {
      NewItems: NewItems,
    }
  }
}
</script>