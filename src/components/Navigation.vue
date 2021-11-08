<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-container>
                <b-navbar-nav>
                    <b-navbar-brand>Totalizer App</b-navbar-brand>
                    <b-nav-item href="#" v-if="$route.name!='home'" @click.prevent="getHome">Home</b-nav-item>
                    <b-nav-item href="#" v-if="$route.name!='data'" @click.prevent="getData">Data</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav ml="auto">
                    <b-nav-text><strong>></strong></b-nav-text>
                    <b-nav-item href="#" v-if="$route.name!='login'" @click.prevent="signOut">Logout</b-nav-item>
                </b-navbar-nav>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Navigation',
    computed: {},
    methods: {
        ...mapActions ({
            // signOutAction: 'auth/signOut',
            // homeAction: 'content/getHome',
            // dataAction: 'content/getData'
        }),
        signOut() {
            this.$store.dispatch('auth/signOut');
            this.$router.push('/login');
        },
        getHome() {
            this.$store.dispatch('auth/getHome');
            this.$router.push('/home');
        },
        getData() {
            this.$store.dispatch('auth/getData');
            this.$router.push('/data');
        },
        // async signOut() {
        //     await this.signOutAction()
        //     this.$router.replace({ name: 'login' })
        // },
        // getHome() {
        //     this.homeAction().then(() => {
        //         this.$router.replace({
        //             name: 'home'
        //         })
        //     })
        // },
        // getData() {
        //     this.dataAction().then(() => {
        //         this.$router.replace({
        //             name: 'data'
        //         })
        //     })
        // },
    }
}
</script>