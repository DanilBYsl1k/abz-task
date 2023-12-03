
<template>
  <div class="preloader">
    <img class="preloader__icon" src="icons/preloader.svg" alt="">    
  </div>
</template>

<script setup></script>

<style lang="scss">
.preloader {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.8;
  
  display: flex;
  align-items: center;
  justify-content: center;
  &__icon {
    width: 100px;


    animation: 1s linear 0s normal none infinite running image-loader;
    -webkit-animation: 1s linear 0s normal none infinite running image-loader;
  }
}

@keyframes image-loader {
  from {
    transform: rotate(0.0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style> 