<template>
    <div>
        <template>
            <h2>Home</h2>
            <!-- <p>User: {{ user }}'s homepage</p> -->
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Home',
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