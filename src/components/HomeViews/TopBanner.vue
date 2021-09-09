<template>
  <div id="home">
      <div class="container-fluid px-0 top-banner">

          <div class="container">
              <div class="row">
                  <div class="col-lg-5 col-md-6">
                      <h1 class="h1">Take Healthy Food, Live Healthy</h1>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                 <div class="mt-4">
                     <button class="main-btn">Explore Food <i class="fas fa-play"></i> </button>
                     <button class="white-btn ms-lg-4 mt-lg-0">Order Now <i class="fas fa-shopping-cart"></i></button>
                     
                 </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* @import '../../assets/css/styles.css'; */
 /* @import '../../assets/css/responsive.css'; */
.top-banner{
    width: 100%;
    background-image: url('../../assets/img/bg/bg-1.jpg');
    background-size: cover;
    padding: 16.8rem 0 9.375rem;
}
h1{
  font-size: 3rem;
  margin-bottom: 3rem;
  font-weight: 900;
  text-transform: capitalize;
 color: var(--secondary-color);

}
</style>