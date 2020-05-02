<template>
  <v-row class="px-2">
    <v-col cols="4" :cols-sm="colSm" :md="colMd" :lg="colLg" v-for="(item, i) in items" :key="i">
      <v-card hover ripple :href="item.url" target="_blank">
        <v-img :src="item.thumbnails">
          <v-card-subtitle :class="getUseClass">{{item.name}}</v-card-subtitle>
        </v-img>
      </v-card>
    </v-col>
  </v-row>    
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    colXs: {
      type: String,
      required: true
    },
    colSm: {
      type: String,
      required: true
    },
    colMd: {
      type: String,
      required: true
    },
    colLg: {
      type: String,
      required: true
    }
  },
  computed: {
    getUseClass () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'card-name-sp'
        case 'sm': return 'card-name-sp'
        case 'md': return 'card-name'
        case 'lg': return 'card-name'
        case 'xl': return 'card-name'
      }
    },
  }
}
</script>
<style lang="scss">
.v-card {
  .card-name {
    font-weight: bold;
    font-size: 16px;
    color: #000;
    padding: 5px 0;
    background-color: rgba(255,255,255,0.8);
    width: 70%;
  }
  .card-name-sp {
    font-weight: bold;
    font-size: 12px;
    color: #000;
    padding: 5px 0;
    background-color: rgba(255,255,255,0.8);
    width: 100%;
  }
}
</style>