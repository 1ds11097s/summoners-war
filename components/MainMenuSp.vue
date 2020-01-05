<template>
  <v-layout>
    <div class="flex-column d-flex justify-center ma-auto">
      <div class="font-weight-bold headline mt-4 mb-3">最新記事</div>
        <template v-for="(post, i) in categoryData.other">
          <template v-if="post.fields.postType != 'mainCategory' && i < 6">  
            <CardSp 
              :key="i" 
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
          :key="j" 
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

export default {
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