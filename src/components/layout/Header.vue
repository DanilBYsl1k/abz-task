<template>
  <header class="header">
    <div class="container header__container align-items-center fx justify-content-between">
      <img class="header__img" src="icons/logo.svg" alt="logo">

      <div class="header__buttons fx">
        <a href="#get" class="button">Users</a>
        <a href="#post" class="button">Sign up</a>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss">
@import '../../styles/mixins/adaptive';

.header {
  
  &__container {
    height: 60px;

    @include desktop {
      padding: 0 60px;
    }

    @include laptop {
      padding: 0 30px;
    }

    @include phone {
      padding: 0 17px;
    }
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