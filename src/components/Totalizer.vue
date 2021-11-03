<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This utility tolalizes some contents from the API that show values for each month</p>
    <h4>Year</h4>
    <ul v-for="(month) in months" v-bind:key="month" v-bind:month="month">
      <li>Select a link below</li>
      li.
    </ul>

    <div v-for="report in reports" v-bind:key="report" v-bind:report="report">
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
        <tr v-for="value in report.values" v-bind:key="value" v-bind:value="value">
        <td>{{ value.month }} {{ value.year }}</td>
        <td>{{ value.orders }}</td>
        <td>£{{ value.revenue }}</td>
        <td>£{{ value.average }}</td>
        </tr>
      </tbody>
      <tfoot v-if="reports">
        <tr>
        <td>Total {{report.year }}</td>
        <td>{{ totalOrders(report.values) }}</td>
        <td>£{{ totalRevenue(report.values) }}</td>
        <td></td>
        </tr>
      </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Totalizer',
  props: {
  msg: String,
  },
  data: function() {
     return {
       months: [
         {id: 1, title: 'January'},
         {id: 2, title: 'February'},
         {id: 3, title: 'March'},
         {id: 4, title: 'April'},
       ],
       reports: [],
     }; 
  },
  created() {
    fetch('http://myjson.dit.upm.es/api/bins/126z')
    .then(response => response.json())
    .then(json => {
      this.reports = json.reports
    });
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
