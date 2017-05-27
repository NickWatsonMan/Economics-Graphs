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
     labels: ["0","10", "20"],
      datasets: [
       {
        label: "Equillibrium",
        data: [10, 10],
        fill: false,
        borderColor: 'red',
        pointRadius: 8,
        backgroundColor: 'red',
        borderDash: [5, 5],
      }, {
      label: "Demand",
      data: [20, 10, 0], //demand info
      fill: false,
      borderColor: '#000000',
      backgroundColor: '#000000',
     }, {
        label: "Supply",
        data: [0, 10, 20], //supply info
        fill: false,
        borderColor: '#f49242',
        backgroundColor: '#f49242',
      }],
   },
    options: {          
        showLines: true, // disable for all datasets   
        scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Quantity'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Price ($)'
                        }
                    }]
                }
      },
    });

//drawing elastic 
//perfect elasticity
var ctx = document.getElementById("perfectElasticity").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    
   data: {
     labels: ["0","10", "20"],
      datasets: [
       {
      label: "Perfect Elasticity",
      data: [10, 10, 10], //demand info
      fill: false,
      borderColor: '#000000',
      backgroundColor: '#000000',
    }],
  },
    options: {          
        showLines: true, // disable for all datasets   
        scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Quantity'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Price ($)'
                        }
                    }]
                }
      },
    });

    //relElastic
    var ctx = document.getElementById("relElastic").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    
   data: {
     labels: ["0","10", "20"],
      datasets: [
       {
      label: "Relativly Elastic",
      data: [10, 9, 8], //demand info
      fill: false,
      borderColor: '#000000',
      backgroundColor: '#000000',
    }],
  },
    options: {          
        showLines: true, // disable for all datasets   
        scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Quantity'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                          suggestedMax: 15,
                          suggestedMin: 0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Price ($)'
                        }
                    }]
                }
      },
    });