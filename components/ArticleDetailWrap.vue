<template>
  <v-row class="main-menu-background" justify="center" align-content="center">
    <v-col cols="2">
      <div class="font-weight-bold text-center">カテゴリー一覧</div>
      <template v-for="(post, i) in contentData">
        <template v-if="post.fields.postType == 'mainCategory' && post.fields.status != 2">
          <v-card 
            :key="i"
            class="card-list text-decoration-none"
            ripple
            :href="`/article?type=` + post.fields.category"
          >
            <v-img
              max-height="180"
              max-width="200"
              :src="post.fields.thumbnail.fields.file.url"
            />
            <v-card-text class="font-weight-bold">{{post.fields.title}}</v-card-text>
          </v-card>
        </template>
      </template>     
    </v-col>
    <v-col cols="8">  
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
    </v-col>
    <v-col cols="2">
      <div class="font-weight-bold text-center">最近更新された記事</div>
      <template v-for="(post, i) in contentData">
        <template v-if="post.fields.postType != 'mainCategory' && i < 7">
          <v-card 
            :key="i"
            class="card-list text-decoration-none"
            ripple
            :href="`/articleDetail?id=` + post.fields.id"
          >
            <v-img
              max-height="180"
              max-width="200"
              :src="post.fields.thumbnail.fields.file.url"
            />
            <v-card-text class="font-weight-bold text-hidden">{{post.fields.title}}</v-card-text>
          </v-card>
        </template>
      </template> 
    </v-col>
  </v-row> 
</template>
<script>
import ArticleDetailContent from "@/components/ArticleDetailContent.vue"
export default {
  data() {
    return {
      filterPostData: []
    }
  },
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