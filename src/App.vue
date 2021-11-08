<template>
    <div id="app">
        <Navigation />
        
        <b-container v-if="!authenticated" id="content-wrap">
            <router-view name="signin" />
        </b-container>

        <b-container v-else id="content-wrap">
            <router-view />
        </b-container>

        <FooterBar />
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import FooterBar from '@/components/FooterBar'
    // import { mapGetters } from 'vuex'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        components: {
            Navigation,
            FooterBar
        },

        computed: {
            // ...mapGetters({
            //     alert: 'auth/alert',
            //     user: 'auth/user',
                // authenticated: 'auth/authenticated'
            // })
        },
    }
</script>

<style>
    #app {
        position: relative;
        min-height: 100vh;
    }

    #content-wrap {
        padding-bottom: 2.5rem;    /* Footer height */
    }
</style>