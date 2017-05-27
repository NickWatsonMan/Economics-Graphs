<template>
  <div>
    <hello></hello>
    <demand></demand>
  </div>
</template>
<script>
import Hello from './components/Hello';
import Demand from './components/Demand'

export default {
  name: 'app',
  components: {
    Hello,
    Demand,
  }
};
</script>

<style>

</style>
