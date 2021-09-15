<template>
   <section id="explore-food">
       <div class="explore-food wrapper">
           <div class="container">
               <div class="row">
                   <div class="col-sm-12">
                       <div class="text-content text-center">
                           <h2>Explore Our Foods</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nobis earum excepturi velit ullam, dolore itaque quo autem ex, est porro numquam sapiente beatae perferendis non consequatur aspernatur harum incidunt odio! Eos iure omnis, nemo nisi reprehenderit consectetur eaque aliquid?</p>
                       </div>
                   </div>
               </div>
               <div class="row pt-5">
                   <div   v-for="item in exploreData" :key="item.mainPrice" class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                       <div class="card">
                           <img class="img-fluid" :src="require(`../../assets/img/img/${item.img}.jpg`)" alt="" srcset="">
                          <div class="pt-5">
                               <h4>{{item.title}}</h4>
                           <p>Time: - {{item.time}} Mins </p>
                           <span>{{item.sellPrice}} <del>{{item.mainPrice}}</del></span>
                           <button class="main-btn d-block mt-4">Order Now</button>
                          </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
</template>

<script>
    export default {
        data() {
            return {
                exploreData:[
                    {title:'Cheeeze Pizzah with Tomato.', img:'img-3', sellPrice:'$123', mainPrice:"$145", time: 10},
                    {title:'Burger with extraa cheese.',img:'img-4', sellPrice:'$100', mainPrice:"$115", time: 15},
                    {title:'Lorem ipsum dolor sit amet.',img:'img-5', sellPrice:'$99', mainPrice:"$199", time: 9},
                ]
            }
        },
    }
</script>

<style scoped>

    .explore-food .card{
       border: none;
       background-color: transparent;
       border-radius: .93rem;
    }
     .explore-food .card img{
       border-radius: .93rem;
       object-fit: cover;
    }
     .explore-food .card span{
     font-size: 1.5rem;
     font-weight: 700;
     color: var(--primary-color);
     padding-bottom:1rem ;
     border-bottom: 0.0625rem solid #eee;
    }
     .explore-food .card del{
      color: var(--text-gray);
      margin-left: .5rem;
    }

</style>