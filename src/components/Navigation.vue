<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-container>
                <b-navbar-nav>
                    <b-navbar-brand>Monthly Totals</b-navbar-brand>
                    <b-nav-item href="#" v-if="$route.name!='total'" @click.prevent="getTotal">Total</b-nav-item>
                    <b-nav-item href="#" v-if="$route.name!='other'" @click.prevent="getOther">Other</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav ml="auto">
                    <b-nav-text><strong>User</strong></b-nav-text>
                    <b-nav-item href="#" v-if="$route.name!='hello'" @click.prevent="getHello">Hello</b-nav-item>
                </b-navbar-nav>
            </b-container>
        </b-navbar>

        <b-alert v-if="alert==true" variant="info" show>{{ message }}</b-alert>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Navigation',
    computed: {
        ...mapGetters ({
            alert: 'reports/alert',
            message: 'reports/message',
        }),
    },
    methods: {
        ...mapActions ({
            getHelloAction: 'reports/getHello',
            getTotalAction: 'reports/getTotal',
            getOtherAction: 'reports/getOther',
            getErrorAction: 'reports/getError',
        }),

        getHello () {
            this.getHelloAction().then(() => {
                this.$router.replace({
                    name: 'hello'
                })
            })
        },

        getTotal () {
            this.getTotalAction().then(() => {
                this.$router.replace({
                    name: 'total'
                })
            })
        },

        getOther () {
            this.getOtherAction().then(() => {
                this.$router.replace({
                    name: 'other'
                })
            })
        },

        getError () {
            this.getErrorAction().then(() => {
                this.$router.replace({
                    name: 'error'
                })
            })
        },

    }
}
</script>