<template>
  <header class="header">
    <div class="container header__container align-items-center fx justify-content-between">
      <img class="header__img" src="icons/logo.svg" alt="logo">

      <div class="header__buttons fx">
        <Button label="Users"></Button>
        <Button label="Sign up"></Button>
      </div>
    </div>
  </header>
</template>

<script setup>
import Button from '../Button.vue';

</script>

<style lang="scss">


.header {
  
  &__container {
    height: 60px;
    // padding: 0 60px;

  }

  &__img {
    width: 104px;
    height: 26px;
  }

  &__buttons {
    gap: 10px;
  }
}
</style>