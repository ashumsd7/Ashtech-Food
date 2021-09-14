<template>
   <section id="about">
       <div class="about-section warpper">
           <div class="container">
               <div class="row align-items-center">
                   <div class="col-lg-7 col-md-12 mb-lg-0 mt-5">
                       <div class="card border-0">
                           <img src="../../assets/img/img/img-1.png" class="img-fluid" alt="" srcset="">
                       </div>
                   </div>
                   <div class="col-lg-5 col-md-12 text-sec">
                       <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum possimus nesciunt adipisci dicta eos. Temporibus, doloremque? Natus tempore sint magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, similique.</p>
                       <button class="main-btn mt-4">Explore More</button>
                   </div>
               </div>
           </div>
           <div class="container food-type">
               <div class="row align-items-center">
                   <div class="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum possimus nesciunt adipisci dicta eos. Temporibus, doloremque? Natus tempore sint magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, similique.</p>
                       <ul class="list-unstyled py-3">
                           <li>Lorem ipsum dolor sit amet consectetur.</li>
                           <li>Lorem ipsum dolor sit amet consectetur.</li>
                           <li>Lorem ipsum dolor sit amet consectetur.</li>
                       </ul>
                       <button class="main-btn mt-4">Explore More</button>
                   </div>
                   <div class="col-lg-7 col-md-12">
                       <div class="card border-0">
                           <img src="../../assets/img/img/img-2.png" alt="" srcset="">
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h2{
  font-size: 2.25rem;
  font-weight: 700;
  text-transform: capitalize;
  font-family: var(--secondary-font);
  color:  var(--secondary-color);
  line-height: 3rem; 
}
.about-section {
    background: var(--white-color);
}
.about-section .card,
.about-section .card img{
    border-radius: 0.62rem;
}
.about-section .text-sec{
    padding-left:2rem ;

}


/* -------------------- */
.food-type{
    padding-top: 3.25rem;

}
.food-type ul li{
    font-size: 1rem;
    color: var(--text-color);
    line-height: 32px;
    position: relative;
    margin-left: 32px;


}
.food-type ul li::before{
    position: absolute;
    left: -2.1rem;
    color: var(--primary-color);
    font-family: "Font Awesome 5 Free";
    content: '\f00c';
    display: inline-block;
    font-weight: 900;
    vertical-align: middle;
    padding-right: 3px;
}

</style>