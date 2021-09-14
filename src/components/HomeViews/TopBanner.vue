<template>
  <div id="home">
      <div class="container-fluid px-0 top-banner">

          <div class="container">
              <div class="row">
                  <div class="col-lg-5 col-md-6">
                      <h1 class="h1">Eat Healthy Food, Live Healthy Life</h1>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                 <div class="mt-4">
                     <button class="main-btn me-lg-1">Explore Food <i class="fas fa-play"></i> </button>
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
    background: url('../../assets/img/bg/bg-1.jpg') center no-repeat;
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
@media(max-width:968px) {
    .top-banner{
        padding: 9.3rem 0 9.3rem;
    }
    
}

@media (max-width:768px){
h1{
    font-size: 2.8rem;

}
h2{
    font-size: 2rem;
    line-height: 2.0rem;
}
.top-banner{
    padding: 10.8rem 0 9.375rem;
}
}

</style>