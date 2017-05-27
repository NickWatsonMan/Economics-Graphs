<template>
<div id="demand">

    <button class="buttons" v-on:click="show = !show">
      Demand And Supply
    </button>
    
    <div class="row">
            <div class="col-md-3 demand">
                <transition name="fade">
                    <p v-show="show">
                        <canvas id="demandSupplyChart" width="200" height="200"></canvas>
                    </p>
                </transition>
            </div>
        <div class="col-md-8">
        <transition name="fade">
        <p v-if="!show">
            <div>

            <div class="row demandAndSupply">
                <div class="col-md-6"><h3>Demand and Supply</h3></div>
            </div>
                
            <div class="row demandAndSupply"> 
                <div class="col-sm-10 description">
                    Supply and demand is perhaps one of the most fundamental concepts of economics and it 
                    is the backbone of a market economy. Demand refers to how much (quantity) of a product or 
                    service is desired by buyers. The quantity demanded is the amount of a product people are willing to buy at a certain price; the relationship between price and quantity demanded is known as the demand relationship. Supply represents how much the market can offer. The quantity supplied refers to the amount of a certain good producers are willing to supply when receiving a certain price. The correlation between price and how much of a good or service is supplied to the market is known as the supply relationship. Price, therefore, is a reflection of supply and demand.
                </div>
            </div>

            </div>
        </p>
        </transition>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'demand',
  data() {
     return { show: true
}
  }
};

</script>



<style>
.demandAndSupply{
    margin-left:10px;
}
.demand{
     float: left;
     margin-left: 20px;
     
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>

