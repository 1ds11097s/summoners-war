require('dotenv').config()
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'サマナーズウォーの参考書',
    meta: [
      { charset: 'utf-8' },
      { name: 'google-site-verification', content: 'uUSQV_621jvohmYULQEgCFTSzPuvp1UX5DD6BgTjKUw' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'サマナーズウォーの攻略や管理人の日記をアップしていくサイトです。文章だけの攻略だと実際にどのように動いているか、どんなルーン構成なのかが分かりにくい部分があるので動画を通して攻略のサポートをします。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    'plugins/contentful',
    'plugins/common'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    'nuxt-user-agent',
    '@nuxtjs/sitemap'
  ],
  
  sitemap: {
    
    hostname: 'https://summoners-war-reference-book.xyz',
    path: '/sitemap.xml',
    exclude: [
      '/article',
      '/articleDetail'
    ],
    async routes () { // ここで動的ページの出力をする
      const contentful = require('contentful');
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN
      });
      const posts = await client.getEntries({
        'content_type': process.env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.createdAt'
      });
  
      let urls = [];
      posts.items.forEach((val, idx, arr) => {
        urls[idx] = 'articledetail/?id=' + String(val.fields.id)
      });
      urls.push("article/?type=beginnersTips")
      urls.push("article/?type=tower")
      urls.push("article/?type=dialy")
      urls.push("article/?type=dungeon")
      urls.push("article/?type=siegeGuildButtle")
      urls.push("article/?type=worldArena")
  
      return urls;
    }
    
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
}
