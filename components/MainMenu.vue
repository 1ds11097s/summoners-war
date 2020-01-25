<template>
  <v-layout>
    <div class="flex-column d-flex justify-center">
      <v-row justify="center" align="center">
        <v-col cols="4">
          <div class="font-weight-bold headline my-4">プロフィール</div>
          <v-card
            class="mx-auto"
            max-width="330"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="iconImage"
            />
            <v-card-text class="text--primary text-left">
              <div>召喚士名：カレーの具</div>
              <div>プレイ歴：5年以上</div>
              <div>
                <a href="https://twitter.com/curry_no_gu_" rel="noopener" target="_blank" class="text-decoration-none">
                  <v-icon left color="#64B5F6">
                    mdi-twitter
                  </v-icon>
                  <span>Twitter</span>
                  <span style="color:#000">はこちら！</span>
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/channel/UCfseiLnxW7TFP9QKP7IfQkw/" rel="noopener" target="_blank" class="text-decoration-none">
                  <v-icon left color="#E53935">
                    mdi-youtube
                  </v-icon>
                  <span style="color:#E53935">Youtube</span>
                  <span style="color:#000">はこちら！</span>
                </a>
              </div>
              <div class="font-weight-bold">一言：Youtubeチャンネル登録お願いします！</div>
            </v-card-text>
          </v-card>
        </v-col>
        
      </v-row>
      
    </div>    
  </v-layout>
</template>
<script>
import Card from "@/components/Card.vue"
import IconImage from "@/assets/image/profile_icon.png"

export default {
  data() {
    return {
      iconImage: IconImage
    };
  },
  props: {
    categoryData: {
      type: Object,
      required: true
    }
  },
  components: {
    Card
  }
};
</script>
<style>
.text-decoration-none {
  text-decoration: none;
}
</style>