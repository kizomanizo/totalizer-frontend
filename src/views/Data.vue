<template>
    <div>
        <template>
            <h2>Data</h2>
            <!-- <p>User: {{ user }}'s homepage</p> -->
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Data',
    components: {
        
    },
    computed: {
        ...mapGetters ({
            // authenticated: 'auth/authenticated',
            // user: 'auth/user'
        }),
    },
    mounted() {
        if (!this.authenticated) {
            this.$router.push('/signin');
        }
    }
}
</script>