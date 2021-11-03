<template>
  <div>
    <template>
      <h2>Hello Everyone</h2>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'helloView',
  components: {
    
  },
  computed: {
    ...mapGetters ({
      helloData: 'reports/payload'
    })
  },
}
</script>