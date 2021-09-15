<template>
  <section id="testimonial">
    <div class="wrapper testimonial-section">
      <div class="container text-center">
        <div class="text-center pb-4">
          <h2>Testimonials</h2>
        </div>
        <div class="col-sm-12 col-lg-10 offset-lg-1">
          <div
            id="carouselExampleDark"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item ">
                <div class="carousel-caption ">
                  <img
                    src="../../assets/img/review/review-1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />

                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                  <h2>First slide label</h2>
                </div>


                
              </div>


              <div class="carousel-item">
                <div class="carousel-caption ">
                  <img
                    src="../../assets/img/review/review-2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />

                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                  <h5>First slide label</h5>
                </div>

              </div>

              <div class="carousel-item active">
                <div class="carousel-caption" >
                  <img
                    src="../../assets/img/review/review-1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />

                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                  <h2>First slide label</h2>
                </div>


                
              </div>

              
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style  scoped>
.testimonial-section {
  background-color: var(--primary-color);
}

.testimonial-section .carousel-item {
  margin-top: 3rem;
  padding: 10rem 3.1rem;
  background-color: var(--white-color);
  border-radius: 0.93rem;
  text-align: center;
}
.testimonial-section .carousel-item .carousel-caption p{
    font-size: 1.31rem;
    line-height: 2.06rem;
    padding: 0 11% 0.625rem;

}
.testimonial-section .carousel-item .carousel-caption h2{
   color: var(--primary-color);

}
.testimonial-section .carousel-caption img{
    max-width: 5rem;
    border-radius: 50%;
    padding: .31rem;
    margin: auto;
    
}
.testimonial-section .carousel-indicators button{
    bottom: -2.8rem;
    background-color: var(--primary-color);
}

/* .testimonial-section .carousel-indicator button{
    width: 15px;
    height: 15px;
    outline: none;
    border-radius: 50%;
    border: none;
    margin-right: 1rem;
    opacity: .2;
    
    
} */
.testimonial-section .carousel-indicator button.active{
   
    opacity: 1;
    
}
@media (max-width:991px){
    .testimonial-section .carousel-item .carousel-caption p{
   padding: 0;

}
}
@media (max-width:768px){
    .testimonial-section .carousel-item {
   padding: 11rem 3.1rem;
}
}
@media (max-width:330px){
      .testimonial-section .carousel-item {
   padding: 13rem 3.1rem;
}
}

</style>