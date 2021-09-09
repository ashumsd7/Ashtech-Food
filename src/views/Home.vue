<template>
  <div class="home">
  <the-navbar></the-navbar>
  <top-banner></top-banner>
  <Counter></Counter>
  </div>
</template>

<script>
// @ is an alias to /src

import TheNavbar from '../components/boss/TheNavbar.vue'
import TopBanner from '../components/HomeViews/TopBanner.vue'
import Counter from '../components/HomeViews/Counter.vue'


export default {
  name: 'Home',
  components:{
    TheNavbar,
    TopBanner,
    Counter,
  }

}
</script>


