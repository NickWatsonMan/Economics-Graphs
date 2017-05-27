<template>
<div class="hello">
  <head>
  </head>
  <div class="row" id="header">
    <div class="col-md-4"></div>
    <div class="col-md-4"><h1>ECONOMICS GRAPHS</h1></div>
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
  color: #111; font-family: 'Open Sans Condensed', sans-serif; 
  font-weight: 700; 
  line-height: 64px; 
  margin: 0 0 0;
  text-align: center; 
  text-transform: uppercase; 
}

p {
  font-weight: normal;
  margin-left: 25%;
}

#header{
 margin-top: 20px;
 margin-bottom: 20px;
 
}



</style>
