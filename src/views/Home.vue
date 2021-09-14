<template>
  <div class="home">
  <the-navbar></the-navbar>
  <top-banner></top-banner>
  <Counter></Counter>
  <About></About>
  <Story/>
  </div>
</template>

<script>
// @ is an alias to /src

import TheNavbar from '../components/boss/TheNavbar.vue'
import TopBanner from '../components/HomeViews/TopBanner.vue'
import Counter from '../components/HomeViews/Counter.vue'
import About from '../components/HomeViews/About.vue'
import Story from '../components/HomeViews/Story.vue'


export default {
  name: 'Home',
  components:{
    TheNavbar,
    TopBanner,
    Counter,
    About,Story
  }

}
</script>


