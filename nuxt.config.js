require('dotenv').config()
const domain = process.env.BASE_URL.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1]
//const modifyHtml = (html) => {
  //html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  //↓こいつで読み込みが止まる
  //html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  // Add amp-custom tag to added CSS
  
  //html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  // Remove every script tag from generated HTML
  //html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  //html = html.replace(/<html/gi, '<html ⚡')
  // html = html.replace(/<img([^>]*)>/gi, (match, sub) => {
  //   return `<amp-img ${sub} layout=intrinsic></amp-img>`
  // })
  //const ampBoilerplate = '<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>'
  // Add AMP script before </head>
  //const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script>'
  //const ampSocial = '<script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>'
  //const ampAnalytics = '<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>'
  //html = html.replace('</head>', ampAnalytics + ampScript + ampBoilerplate + ampSocial + '</head>')
  //return html
//}
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
      { name: 'author', content: 'カレーの具' },
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
    // ['@nuxtjs/google-adsense', {
    //   id: process.env.GA_ADSENSE_ID,
    //   pageLevelAds: true,
    //   analyticsUacct: process.env.GA_TRACKING_ID, // アナリティクスと連携する場合のみ必要
    //   analyticsDomainName: domain                 // アナリティクスと連携する場合のみ必要
    // }],
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: "サマナーズウォーの参考書",
    lang: 'ja',
    short_name: 'サマ参'
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
      urls.push("article/?type=summonersWarRanking")
      urls.push("article/?type=recommendMonster")
  
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
    optimization: {
      splitChunks: {
        chunks: 'async',
      }
    },
    splitChunks: {
      pages: false,
      vendor: false,
      commons: false,
      runtime: false,
      layouts: false
    },
  },
  env: {
    // contentful
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },
  // hooks: {
  //   'generate:page': (page) => {
  //     page.html = modifyHtml(page.html)
  //   },
  //   // This hook is called before rendering the html to the browser
  //   'render:route': (url, page, { req, res }) => {
  //     page.html = modifyHtml(page.html)
  //   }
  // },
  // render: {
  //   http2: {
  //       push: true,
  //       pushAssets: (req, res, publicPath, preloadFiles) => console.log(preloadFiles)
  //   }
  // }
}
