<template>
  <header>
    <nav
      class="
        navbar navbar-expand-lg
        position-fixed
        w-100
        start-0
        navigation-wrap
      "
    >
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src="../../assets/logo.png" alt="" srcset=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <span class="navbar-toggler-icon"></span> -->
          <img src="../../assets/menu.png" alt="" srcset="" />
          <!-- //Your ICON -->
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Get Foods</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Reviews</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQs</a>
            </li>
            <li class="nav-item">
              <button class="main-btn">+123 456789</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style  scoped>
:root{
  --primary-font:  'Roboto', sans-serif;
  --secondary-font: 'Quicksand', sans-serif;

  --primary-color:#1a922e;
  --secondary-color:#43121d;
  --third-color:#f98169;
  --white-color:#fff;
  --text-color:#555;
  --text-gray:#999;
  --black-color:#000;

}
.navigation-wrap {
  z-index: 1000;
  transition: all 0.3s ease-out;
}
.nav-item {
  padding: 0 0.625rem;
  transition: all 0.2s linear;
}
/* //FIX IT  */
.navbar-toggle:focus{
    outline: unset;
    border: unset;
    box-shadow: none;
}
.nav-link{
    font-size: .93rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--primary-color);
    letter-spacing: 1px
}
.navigation-wrap .main-btn{
    padding: .32rem 1.4rem;
    box-shadow: none;
    margin-left: .625rem;
}
/* //USED IN SCROLL : CHNAGE NAV BAR STYLE ON SCROLL */
.navigation-wrap.scroll-on{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background:var(--white-color);
    box-shadow:  0 0.125rem  1.7rem 0 rgba(0, 0, 0, .9);
    transition: all .5s ease-in-out 0s;

}
</style>