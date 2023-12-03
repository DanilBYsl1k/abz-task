<template>
<div class="alert">
  <h2>User successfully registered</h2>
  <img src="icons/success-image.jpg" alt="">
</div>
</template>
<script setup></script>
<style lang="scss">
.alert {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.9;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
}
</style>