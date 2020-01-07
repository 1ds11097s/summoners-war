<template>
  <v-layout>
    <div class="flex-column d-flex justify-center">
      <div class="font-weight-bold headline mt-4">最新記事</div>
      <v-row justify="center" align-content="center">
        <template v-for="(post, i) in categoryData.other">
          <template v-if="post.fields.postType != 'mainCategory' && i < 6">  
            <Card 
              :key="i" 
              :linkPath="`/articleDetail?id=` + post.fields.id"
              :title="post.fields.title"
              :subTitle="post.fields.content"
              :image="post.fields.thumbnail.fields.file.url"
              :type="post.fields.postType"
              col="2"
              cardTextHeight="100%"
              :createdAt="post.fields.createdAtJpn">
            </Card>
          </template>
        </template> 
      </v-row>
      <div class="font-weight-bold headline mt-4">カテゴリ一覧</div>  
      <v-row justify="center" align-content="center">
        <Card 
          v-for="(post, i) in categoryData.main" 
          :key="i" 
          :linkPath="`/article?type=` + post.fields.category" 
          :title="post.fields.title" 
          :subTitle="post.fields.content"
          :image="post.fields.thumbnail.fields.file.url"
          :type="post.fields.postType"
          col="4"
          cardTextHeight=""
          :createdAt="post.fields.createdAtJpn">
        </Card>
      </v-row>
    </div>    
  </v-layout>
</template>
<script>
import Card from "@/components/Card.vue"

export default {
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