require('dotenv').config()
const domain = process.env.BASE_URL.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1]
//const ampify = require('~/plugins/ampify')
// const modifyHtml = (html) => {
//   // Add amp-custom tag to added CSS
//   html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
//   // Remove every script tag from generated HTML
//   html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
//   // Add AMP script before </head>
//   const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script>'
//   const ampSocial = '<script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>'
//   html = html.replace('</head>', ampScript + ampSocial + '</head>')
//   return html
// }
// const modifyHtml = (html) => {
//   console.log("aaa")
//   // Add amp-custom tag to added CSS
//   html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
//   // Remove every script tag from generated HTML
//   html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
//   // Add AMP script before </head>
//   const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script>'
//   const ampSocial = '<script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>'
//   html = html.replace('</head>', ampScript + ampSocial + '</head>')
//   console.log(html)
//   return html
// }

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
      { hid: 'description', name: 'description', content: 'サマナーズウォーの攻略や管理人であるカレーの具のプレイ日記を動画でアップしていくサイトです。ワールドアリーナ、ダンジョン攻略等の動画を日々更新しています。文章だけの攻略だと実際にどのように動いているか、どんなルーン構成なのかが分かりにくい部分があるので動画を通して攻略のサポートをします。' }
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
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-adsense', {
      id: process.env.GA_ADSENSE_ID,
      pageLevelAds: true,
      analyticsUacct: process.env.GA_TRACKING_ID, // アナリティクスと連携する場合のみ必要
      analyticsDomainName: domain                 // アナリティクスと連携する場合のみ必要
    }],
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: "サマナーズウォーの参考書",
    lang: 'ja'
  },
  
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
  // hooks: {
  //   // This hook is called before rendering the html to the browser
  //   // 'render:route': (url, page) => {
  //   //   page.html = modifyHtml(page.html)
  //   // }

  // }
  hooks: {
    // This hook is called before saving the html to flat file
    // 'generate:page': (page) => {
    //   page.html = modifyHtml(page.html)
    // },
    // // This hook is called before rendering the html to the browser
    // 'render:route': (url, page, { req, res }) => {
    //   page.html = modifyHtml(page.html)
    // }
    // 'generate:page': (page) => {
    //   page.html = modifyHtml(page.html)
    //  },
    // 'render:route': (url, page, { req, res }) => {
    //   page.html = modifyHtml(page.html)
    // }
  }
}
