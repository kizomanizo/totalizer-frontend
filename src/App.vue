<template>
    <div id="app">
      <Navigation />
      <b-container v-if="payload.heading">
        <h3>{{ payload.heading }}</h3>
        <p>{{ payload.message }}</p>
      </b-container>

      <b-container v-else>
        <router-view />
      </b-container>
    </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      Navigation,
    },

    computed: {
      ...mapGetters({
        alert: 'reports/alert',
        payload: 'reports/payload'
      })
    },
  }
</script>