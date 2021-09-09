<template>
  <div id="counter">
      <section class="counter-section">
          <div class="container">
              <div class="row text-center">

                  <div v-for="item in counterData" :key="item.title" class="col-md-3 mb-lg-0 mb-md-0 mb-5">
                      <h2>
                          <span id="count1">
                              {{ item.Count}}
                          </span>
                      </h2>
                      <p>{{item.title}}</p>
                  </div>




                  
              </div>
          </div>
      </section>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                 counterData:[
                     {title:'Orders', Count:'12345+'},
                     {title:'Pincodes', Count:'100+'},
                     {title:'Reached', Count:'2500+'},
                     {title:'Counting', Count:'1000+'},
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