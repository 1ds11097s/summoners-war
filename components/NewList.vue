<template>
  <YoutubeCardList :items="NewItems" col=3 />
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