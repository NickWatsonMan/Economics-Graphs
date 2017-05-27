<template>
  <div class="hello">
  <head>
  </head>
    <h1>Graphs of economics</h1>
        <div id="result">
          <h1></h1>
        </div>

        <div style="width: 400px">
          <canvas id="demandSupplyChart" width="400" height="400"></canvas>
          <p>Demand and Supply</p>
        </div>
        
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  margin-left: 35%;
}

p {
  font-weight: normal;
  margin-left: 26%;
  margin-top: -20px;
}
</style>
