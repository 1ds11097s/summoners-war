<template>
  <v-row>
    <v-col :cols="col" v-for="(item, i) in items" :key="i">
      <v-card hover ripple :href="item.url" target="_blank">
        <v-img :src="item.thumbnails">
          <v-card-subtitle class="card-name">{{item.name}}</v-card-subtitle>
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
    col: {
      type: String,
      required: true
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
}
</style>