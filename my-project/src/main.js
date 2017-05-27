// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue';
import './lib/jquery.min.js'
import  '../node_modules/chart.js/dist/Chart.min.js'

Vue.use(BootstrapVue);

import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


//drawing demand/supply chart
var ctx = document.getElementById("demandSupplyChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
   data: {
      datasets: [{
      label: "Demand",
      data: [{x:2, y:20}, {x:2, y:2}], //demand info
      fill: false,
      borderColor: '#000000',
    }, {
        label: "Supply",
        data: [{x:20, y:2}, {x:20, y:20}], //supply info
        fill: false,
        borderColor: '#f49242',
      }],
   },
    options: {          
      showLines: true, // disable for all datasets    
        }
    });
