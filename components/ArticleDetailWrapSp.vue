<template>
  <div class="flex-column d-flex justify-center ma-auto">
    <div style="max-width:380px">  
      <template v-for="(post, i) in contentData">
        <template v-if="post.fields.id == $route.query.id">  
          <ArticleDetailContent
            :key="i"
            :title="post.fields.title" 
            :content="post.fields.content"
            :image="post.fields.thumbnail.fields.file.url"
            :youtube="post.fields.youtube"
            :type="post.fields.postType"
            :createdAt="post.fields.createdAtJpn"
          />
        </template>
      </template>
    </div>
    <div class="font-weight-bold text-center mt-4 mb-3">最近更新された記事</div>
    <template v-for="(post, i) in contentData">
      <template v-if="post.fields.postType != 'mainCategory' && i < 6">
        <v-card 
          :key="i"
          class="card-list text-decoration-none"
          ripple
          :href="`/articleDetail?id=` + post.fields.id"
          max-width="380"
        >
          <v-img
            height="200px"
            :src="post.fields.thumbnail.fields.file.url"
          />
          <v-card-text class="font-weight-bold text-hidden">{{post.fields.title}}</v-card-text>
        </v-card>
      </template>
    </template>
    <div class="font-weight-bold text-center mt-4 mb-3">カテゴリー一覧</div>
    <template v-for="(post, i) in contentData">
      <template v-if="post.fields.postType == 'mainCategory'">
        <v-card 
          :key="i"
          class="card-list text-decoration-none"
          ripple
          :href="`/article?type=` + post.fields.category"
          max-width="380"
        >
          <v-img
            height="200px"
            :src="post.fields.thumbnail.fields.file.url"
          />
          <v-card-text class="font-weight-bold">{{post.fields.title}}</v-card-text>
        </v-card>
      </template>
    </template>
  </div>
</template>
<script>
import client from '@/plugins/contentful'
import ArticleDetailContent from "@/components/ArticleDetailContent.vue"
export default {
  components: {
    ArticleDetailContent
  },
  props: {
    contentData: {
      type: Array,
      required: true
    }
  }
};
</script>
<style>
.youtubesp-size{
    position:relative;
    width:100%;
    height:0;
    padding-top:75%;
}
.youtubesp-size iframe{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
}
</style>