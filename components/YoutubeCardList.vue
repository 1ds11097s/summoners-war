<template>
  <v-row class="px-2">
    <v-col :xs="colXs" :sm="colSm" :md="colMd" :lg="colLg" v-for="(item, i) in items" :key="i">
      <v-dialog
        :v-model="`dialog${i}`"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-card hover ripple v-on="on" style="height:100%">
            <v-img :src="item.thumbnails">
              <v-card-subtitle class="card-name">{{item.name}}</v-card-subtitle>
            </v-img>
            <v-card-subtitle class="font-weight-bold">{{item.title}}</v-card-subtitle>
          </v-card>
        </template>
        <youtube :video-id="item.id" />
      </v-dialog>
    </v-col>
  </v-row>    
</template>
<script>
import Vue from 'vue';
import VueYoutube from 'vue-youtube';
Vue.use(VueYoutube)
export default {
  components: {
    VueYoutube
  },
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
  data() {
    return {
      dialog0:false,
      dialog1:false,
      dialog2:false,
      dialog3:false,
      dialog4:false,
      dialog5:false,
      dialog6:false,
      dialog7:false,
      dialog8:false,
      dialog9:false,
      dialog10:false,
      dialog11:false,
      dialog12:false
    }
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