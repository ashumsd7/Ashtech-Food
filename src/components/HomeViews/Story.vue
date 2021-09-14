<template>
<section id="story">
    <div class="story-section text-center">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="text-content">
                         <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum possimus nesciunt adipisci dicta eos. Temporibus, doloremque? Natus tempore sint magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, similique.</p>
                       <button class="main-btn mt-4">
                           Read More
                       </button>
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

<style  scoped>
.story-section{
    width: 100%;
    height: 28.1rem;
    background: url('../../assets/img/bg/bg-2.jpg') no-repeat center;
    background-size: cover;
    padding-top: 100px;


}
.story-section h2{
    color:var(--primary-color);
    font-weight: bolder;
}
@media (max-width:768px){
    .story-section{
        height: auto;
       padding: 3rem 0;
    }
}
</style>