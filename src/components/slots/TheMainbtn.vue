<template>
  <button class="main-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.main-btn{
  display: inline-block;
  padding: .62rem 1.8rem;
  line-height: 1.56rem;
  background-color: var(--primary-color);
  border: .18rem solid var(--primary-color);
  color: var(--white-color);
  font-size: .93rem;
  font-weight: 600;
  text-transform: capitalize;
  box-shadow: 1px 2px 10px -1px rgb(0,0,0/19%);
  
}
</style>