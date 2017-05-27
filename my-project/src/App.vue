<template>
  <div>
    <hello></hello>
    <demand></demand>
    <Footer></Footer>
  </div>
</template>
<script>
import Hello from './components/Hello';
import Demand from './components/Demand';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Hello,
    Demand,
    Footer,
  }
};
</script>

<style>

</style>
