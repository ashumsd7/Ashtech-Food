<template>
  <div id="counter">
      <section class="counter-section">
          <div class="container">
              <div class="row text-center">
                  

                  <div v-for="item in counterData" :key="item.title" class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                      <h2>
                          <span id="count1">
                              <VueJsCounter thousand="," :end="item.count"></VueJsCounter>
                          </span>
                      </h2>
                     <p><strong>{{item.title}}</strong></p> 
                  </div>




                  
              </div>
          </div>
      </section>
  </div>
</template>

<script>
import VueJsCounter from 'vue-js-counter'
    export default {
         components: {
            VueJsCounter 
        },
        data() {
            return {
                 counterData:[
                     {title:'Orders', count:3421},
                     {title:'Pincodes', count:150},
                     {title:'Reached', count:2500},
                     {title:'Counting', count:1000},
                 ]
            }
        },
        methods: {
            startCounter(id,start,end,duration){

            }
        },
        created() {

            
        },
        
    }
</script>

<style  scoped>
.counter-section{
    background-color: var(--primary-color);
    padding: 2.5rem 0;
}
.counter-section p{
    color: var(--white-color);
    text-transform: uppercase;
}
</style>