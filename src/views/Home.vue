<template>
  <div class="home">
  <the-navbar></the-navbar>
  <top-banner></top-banner>
  <Counter></Counter>
  <About></About>
  <Story/>
 <explore></explore>
 <client-slider></client-slider>
  </div>
</template>

<script>
// @ is an alias to /src

import TheNavbar from '../components/boss/TheNavbar.vue'
import TopBanner from '../components/HomeViews/TopBanner.vue'
import Counter from '../components/HomeViews/Counter.vue'
import About from '../components/HomeViews/About.vue'
import Story from '../components/HomeViews/Story.vue'
import Explore from '../components/HomeViews/Explore.vue'
import ClientSlider from '../components/HomeViews/ClientSlider.vue'



export default {
  name: 'Home',
  components:{
    TheNavbar,
    TopBanner,
    Counter,
    About,Story,Explore,
    ClientSlider
   
  }

}
</script>


