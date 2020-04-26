<template>
  <div class="container">
      <v-row justify="center">
        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="4" />
            <v-col cols="4">
              <v-img :src="title1" class="title-image"/>
            </v-col>
            <v-col cols="4">
              <adsbygoogle :ad-slot="'6160641832'" ad-format="" style="display:inline-block;width:250px;height:64px"/>
            </v-col>
          </v-row>  
        </v-col>
        <v-col cols="12">
          <NewList />
        </v-col>
        <v-col cols="12">
          <v-img :src="title2" class="title-image"/>
        </v-col>
        <v-col cols="12">
          <RecommendList />
        </v-col>
        <v-col cols="12">
          <v-img :src="title3" class="title-image"/>
          <div class="font-weight-bold mt-4">※チャンネルアイコンをクリックするとYoutubeチャンネルに移動します</div>
        </v-col>
        <v-col cols="12">
          <YoutuberList />
        </v-col>
        <v-col cols="12">
          <adsbygoogle :ad-slot="'5576411807'" />
        </v-col>
      </v-row>
  </div>
</template>

<script>
import NewList from '~/components/NewList.vue'
import RecommendList from '~/components/RecommendList.vue'
import YoutuberList from '~/components/YoutuberList.vue'
import Title1 from "@/assets/image/title1.png"
import Title2 from "@/assets/image/title2.png"
import Title3 from "@/assets/image/title3.png"

export default {
  components: {
    NewList,
    RecommendList,
    YoutuberList,
    Title1,
    Title2,
    Title3
  },
  data() {
    return {
      title1: Title1,
      title2: Title2,
      title3: Title3,
    }
  }
}
</script>

<style>
.title-image {
  margin: auto;
  width: 250px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
