<template>
  <v-container>
    <v-layout>
      <client-only placeholder="Loading...">
        <v-row v-if="deviceType==='pc'" class="main-menu-background" justify="center" align-content="center">
          <template v-for="(post, i) in filterPosts">
            <Card
              v-if="post.fields.postType == $route.query.type"
              :key="i"
              :linkPath="`/articleDetail?id=` + post.fields.id"
              :title="post.fields.title" 
              :subTitle="post.fields.content" 
              :image="post.fields.thumbnail.fields.file.url"
              :type="post.fields.postType"
              col="4"
              cardTextHeight=""
              :createdAt="post.fields.createdAtJpn"
            ></Card>
          </template>
        </v-row>
        <div v-else class="flex-column d-flex justify-center ma-auto text-center">
          <template v-for="(post, i) in filterPosts">
            <CardSp
              v-if="post.fields.postType == $route.query.type"
              :key="i" 
              :linkPath="`/articleDetail?id=` + post.fields.id"
              :title="post.fields.title"
              :subTitle="post.fields.content"
              :image="post.fields.thumbnail.fields.file.url"
              :type="post.fields.postType"
              cardTextHeight=""
              :createdAt="post.fields.createdAtJpn"
            >
            </CardSp>
          </template>
        </div>
      </client-only>  
    </v-layout>
    <div class="text-center">
    <v-btn href="/" class="ma-2 text-decoration-none" outlined color="indigo">Topに戻る</v-btn>
    </div>
</v-container>
</template>
<script>
import client from '@/plugins/contentful';
import ArticleDetail from '@/pages/articleDetail';
import Card from "@/components/Card.vue"
import CardSp from "@/components/CardSp.vue"
export default {
  data() {
    return {
      filterPostData: [],
      deviceType: "",
      meta: {
        title: "サマナーズウォーの参考書 | " + this.$route.query.title,
        type: 'article',
        url: 'https://summoners-war-reference-book.xyz/article?type=' + this.$route.query.type + '&title=' + this.$route.query.title
      },
    }
  },
  head() {
    return {
      title: "サマナーズウォーの参考書 | " + this.$route.query.title,
      meta: [
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:url', property: 'og:url', content: this.meta.url }
      ],
    }
  },
  created () {
    this.deviceType = this.checkDevice()
  },
  components: {
    Card,
    ArticleDetail,
    CardSp
  },
  async asyncData({ env }) {
    let posts = []
    let filterPosts = []
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.createdAt'
    }).then(res => (posts = res.items)).catch(console.error)
    if (posts) {
      posts.forEach((value) => {
        const today = new Date(value.fields.createdAt)
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const day = today.getDate()
        value.fields.createdAtJpn =  year + '年' + month + '月' + day + '日'
        filterPosts.push(value)
      })
    }
    return { filterPosts }
  }
};
</script>
<style>
.text-hidden {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>