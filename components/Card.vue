<template>
  <v-col :cols="col" class="text-center">
    <v-card
      :href="linkPath" 
      class="mx-auto text-decoration-none" 
      max-width="400" 
      ripple 
      hover 
      :style="{height:cardTextHeight}"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="image"
        :lazy-src="lazy"
      >
        <template v-slot:placeholder>
          <v-layout
            fill-height
            align-center
            justify-center
            ma-0
          >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
        <v-chip v-if="type!='mainCategory' && !$route.query.type" color="primary" class="ma-2 caption">{{createdAt}}</v-chip>
        <v-card-title v-if="type=='mainCategory'" class="card-title headline font-weight-bold">{{title}}</v-card-title>
      </v-img>
      <v-card-text class="text--primary">
        <div v-if="type=='mainCategory'" class="font-weight-bold text-hidden">{{subTitle}}</div>
        <div v-else class="font-weight-bold text-hidden">{{title}}</div>
      </v-card-text>
    </v-card>
    <v-chip v-if="type!='mainCategory' && $route.query.type" color="primary" class="ma-2 caption">記事作成日{{createdAt}}</v-chip>
  </v-col>
</template>
<script>
import Lazy from "@/assets/image/lazy.png"
export default {
  data() {
    return {
      lazy: Lazy,
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false  
    },
    linkPath: {
      type: String,
      required: true  
    },
    type: {
      type: String,
      required: true  
    },
    col: {
      type: String,
      required: true  
    },
    cardTextHeight: {
      type: String,
      required: true  
    },
    createdAt: {
      type: String,
      required: false  
    }
  }
};
</script>
<style>
.card-title {
  background-color: rgba(0,0,0,0.4);
}
.text-decoration-none {
  text-decoration: none;
}
</style>