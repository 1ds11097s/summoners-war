<template>
  <v-container>
    <no-ssr>
      <MainMenu v-if="deviceType=='pc'" :categoryData="filterPosts"></MainMenu>
      <MainMenuSp v-else :categoryData="filterPosts"></MainMenuSp>
    </no-ssr>
  </v-container>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue'
import MainMenuSp from '~/components/MainMenuSp.vue'
import client from '../plugins/contentful'

export default {
  components: {
    MainMenu,
    MainMenuSp
  },
  data() {
    return {
      deviceType: ""
    }
  },
  created () {
    this.deviceType = this.checkDevice()
  },
  async asyncData({ env }) {
    let posts = []
    let filterPosts = {"main":[], "other":[]}
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
        if (value.fields.postType == "mainCategory") {
          filterPosts.main.push(value)
        } else {
          filterPosts.other.push(value)
        }
      })
    }
    return { filterPosts }
  }
}
</script>

<style>
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
