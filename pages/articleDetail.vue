<template>
  <v-container>
    <v-layout>
      <client-only placeholder="Loading...">
        <ArticleDetailWrap v-if="deviceType==='pc'" :contentData="filterPosts"/>
        <ArticleDetailWrapSp v-else :contentData="filterPosts"/>
      </client-only>
    </v-layout>
  </v-container>
</template>
<script>
import ArticleDetailWrap from "@/components/ArticleDetailWrap.vue"
import ArticleDetailWrapSp from "@/components/ArticleDetailWrapSp.vue"
import client from '@/plugins/contentful'
export default {
  data() {
    return {
      deviceType: "",
      pageInfo: []
    }
  },
  head() {
    return {
      title: "サマナーズウォーの参考書 | " + this.pageInfo[0].fields.title,
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: "サマナーズウォーの参考書 | " + this.pageInfo[0].fields.title },
        { hid: 'og:url', property: 'og:url', content: 'https://summoners-war-reference-book.xyz/articleDetail?id=' + this.$route.query.id },
        { hid: 'og:image', property: 'og:image', content: this.pageInfo[0].fields.thumbnail.fields.file.url }
      ],
    }
  },
  components: {
    ArticleDetailWrap,
    ArticleDetailWrapSp
  },
  created () {
    this.deviceType = this.checkDevice()
    this.pageInfo = this.filterPosts.filter(item => item.fields.id == this.$route.query.id)
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
.card-list {
    margin-top: 10px;
}
.text-decoration-none {
  text-decoration: none;
}
.text-hidden {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>