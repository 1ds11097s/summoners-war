import Vue from 'vue'

Vue.mixin({
  methods: {
    checkDevice() {
      const deviceType = this.$ua.deviceType()
      return deviceType
    }
  }
})