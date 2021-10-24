<template>
    <div>
        <template>
            <h2>Total Revenues</h2>
            <div v-for="report in totalData.reports" v-bind:key="report" v-bind:report="report">
                <h2>{{ report.year }}</h2>

                <table class="table table-striped" aria-describedby="A table for monthly totals">
                <thead>
                    <tr>
                    <th id="Month">Month</th>
                    <th id="Orders">Number of orders</th>
                    <th id="Revenur">Total revenue</th>
                    <th id="Average">Average order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, index) in report.values" v-bind:key="value" v-bind:value="value">
                    <td>{{ index+value.month }} {{ value.year }}</td>
                    <td>{{ value.orders }}</td>
                    <td>Shs{{ value.revenue }}</td>
                    <td>Shs{{ value.average }}</td>
                    </tr>
                </tbody>
                <tfoot v-if="reports">
                    <tr>
                    <td>Total {{report.year }}</td>
                    <td>{{ totalOrders(report.values) }}</td>
                    <td>Shs{{ totalRevenue(report.values) }}</td>
                    <td></td>
                    </tr>
                </tfoot>
                </table>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: 'totalView',
    components: {
        
    },
    data: function() {
       return {
           reports: [],
       }; 
    },
    computed: {
        ...mapGetters ({
            totalData: 'reports/payload'
        })
    },

    methods: {
        totalOrders: function (values) {
            return values.reduce((acc, val) => {
                return acc + parseInt(val.orders);
            }, 0);    
        },
        totalRevenue: function (values) {
            return values.reduce((acc, val) => {
                return acc + parseInt(val.revenue);
            }, 0);
        }
    }
}
</script> 