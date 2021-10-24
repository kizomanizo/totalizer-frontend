<template>
    <div>
        <template>
            <h2>Other Reports</h2>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: 'otherView',
    components: {
        
    },
    computed: {
        ...mapGetters ({
            otherData: 'reports/payload'
        })
    },
}
</script>