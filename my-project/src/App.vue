<template>
  <div>
    <hello></hello>
    <demand></demand>
    <elastic></elastic>
    
    </br>
    <Footer></Footer>
  </div>
</template>
<script>
import Hello from './components/Hello';
import Demand from './components/Demand';
import Footer from './components/Footer';
import Elastic from './components/Elastic';

export default {
  name: 'app',
  components: {
    Hello,
    Demand,
    Footer,
    Elastic
  }
};
</script>

<style>

</style>
