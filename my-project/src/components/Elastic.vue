<template>
<div id="demand">

    <a href="#"><h3 class="buttons" v-on:click="show = !show">
      Elasticity
    </h3></a>
    <div class="row">
        <div class="col-md-3 demand">
            <transition name="fade">
                        <p v-show="show">
                            <canvas id="perfectElasticity" width="200" height="200"></canvas>
                        </p>
            </transition>
        </div>
        <div class="col-md-3 demand">
            <transition name="fade">
                        <p v-show="show">
                            <canvas id="relElastic" width="200" height="200"></canvas>
                        </p>
            </transition>
        </div>
    </div>
    
        <transition name="fade">
        <p v-if="!show">
            <div>
                
            <div class="row elasticText"> 
                <div class="col-md-11 description">
                    We’ve seen that the demand and supply of goods react to changes in price, and that prices in turn move along with changes in quantity. We’ve also seen that the utility, or satisfaction received from consuming or acquiring goods diminishes with each additional unit consumed. The degree to which demand or supply reacts to a change in price is called elasticity.

Elasticity varies from product to product because some products may be more essential to the consumer than others. Demand for products that are considered necessities is less sensitive to price changes because consumers will still continue buying these products despite price increases. On the other hand, an increase in price of a good or service that is far less of a necessity will deter consumers because the opportunity cost of buying the product will become too high.

A good or service is considered highly elastic if even a slight change in price leads to a sharp change in the quantity demanded or supplied. Usually these kinds of products are readily available in the market and a person may not necessarily need them in his or her daily life, or if there are good substitutes. For example, if the price of Coke rises, people may readily switch over to Pepsi. On the other hand, an inelastic good or service is one in which large changes in price produce only modest changes in the quantity demanded or supplied, if any at all. These goods tend to be things that are more of a necessity to the consumer in his or her daily life, such as gasoline.


                </div>
            </div>

            </div>
        </p>
        </transition>
        
    
  </div>
</template>

<script>
export default {
  name: 'elasctic',
  data() {
     return { show: false
}
  }
};

</script>



<style>
.elasticText{
    padding-left: 30px;
}
.buttons{
  text-align: center; 
}
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

