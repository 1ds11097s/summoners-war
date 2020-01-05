<template>
    <v-row 
      class="main-menu-background" 
      justify="center" 
      align-content="center"
    >
      <v-col 
        class="text-center font-weight-bold headline" 
        cols="12"
      >
        {{title}}
      </v-col>
      <v-col
        v-if="deviceType==='pc'"
        class="text-center" 
        cols="12" 
        v-html="youtube">
      </v-col>
      <v-col
        v-else
        class="text-center youtubesp-size" 
        cols="12"
        v-html="youtube">
      </v-col>
      <v-col 
        class="text-center pt-0" 
        cols="12" 
      >
        <v-chip color="primary" class="ma-2">記事作成日：{{createdAt}}</v-chip>
      </v-col>
      <v-col 
        class="text-left px-5 article-content" 
        cols="12" 
        v-html="content" 
        style="line-height:2.0">
      </v-col>
      <v-btn :href="`/article?type=` + type" class="ma-2 text-decoration-none" outlined color="indigo">一覧に戻る</v-btn>
      <v-btn href="/" class="ma-2 text-decoration-none" outlined color="indigo">Topに戻る</v-btn>
    </v-row>
</template>
<script>

export default {
  data() {
    return {
      deviceType: ""
    }
  },
  created () {
    this.deviceType = this.checkDevice()
  },
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    youtube: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true  
    }
  }
};
</script>
<style>
.article-content span {
  color: #EC3838;
  font-weight: bold; 
}
.text-decoration-none {
  text-decoration: none;
}
</style>