<template>
  <v-layout>
    <div class="flex-column d-flex justify-center ma-auto">
      <div class="font-weight-bold headline my-4">プロフィール</div>
      <v-card
        class="mx-auto"
        max-width="380"
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
            <a href="https://twitter.com/curry_no_gu_" target="_blank" class="text-decoration-none">
              <v-icon left color="#64B5F6">
                mdi-twitter
              </v-icon>
              <span>Twitter</span>
              <span style="color:#000">はこちら！</span>
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCfseiLnxW7TFP9QKP7IfQkw/" target="_blank" class="text-decoration-none">
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
      <div class="font-weight-bold headline mt-4 mb-3">おすすめ記事</div>
      <v-row justify="center" align-content="center">
        <template v-for="(post, k) in categoryData.other">
          <template v-if="post.fields.postType != 'mainCategory' && post.fields.isRecommend">
            <CardSp
              :key="`first-${k}`" 
              :linkPath="`/articleDetail?id=` + post.fields.id"
              :title="post.fields.title"
              :subTitle="post.fields.content"
              :image="post.fields.thumbnail.fields.file.url"
              :type="post.fields.postType"
              cardTextHeight="100%"
              :createdAt="post.fields.createdAtJpn"
            >
            </CardSp>
          </template>
        </template> 
      </v-row>
      <div class="font-weight-bold headline mt-4 mb-3">最新記事</div>
        <template v-for="(post, i) in categoryData.other">
          <template v-if="post.fields.postType != 'mainCategory' && i < 6">  
            <CardSp 
              :key="`second-${i}`" 
              :linkPath="`/articleDetail?id=` + post.fields.id"
              :title="post.fields.title"
              :subTitle="post.fields.content"
              :image="post.fields.thumbnail.fields.file.url"
              :type="post.fields.postType"
              cardTextHeight="100%"
              :createdAt="post.fields.createdAtJpn">
            </CardSp>
          </template>
        </template> 
      <div class="font-weight-bold headline mt-4">カテゴリ一覧</div>  
        <CardSp
          v-for="(post, j) in categoryData.main" 
          :key="`third-${j}`" 
          :linkPath="`/article?type=` + post.fields.category" 
          :title="post.fields.title" 
          :subTitle="post.fields.content"
          :image="post.fields.thumbnail.fields.file.url"
          :type="post.fields.postType"
          cardTextHeight=""
          :createdAt="post.fields.createdAtJpn">
        </CardSp>
    </div>    
  </v-layout>
</template>
<script>
import CardSp from "@/components/CardSp.vue"
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
    CardSp
  }
};
</script>