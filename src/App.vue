<template>
  <HeaderComponent></HeaderComponent>

  <main class="main">
    <MainComponent/>
  </main>

</template>

<script setup>
import HeaderComponent from "./components/layout/Header.vue";
import MainComponent from "./views/Main.vue";

</script>

<style lang="scss">
@import './styles/index.scss';

@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-only($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    @include flex-core($infix);
  }
}

body {
  background: $background_color;
  position: relative;
}

a {
  text-decoration: none;
  color: black;
  text-align: center;
}

.bg-img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.container {
  max-width: 1170px;
  margin: auto;

  @include phone {
    padding: 0 16px;
  }
}

.title {
  text-align: center;
  margin-top: 140px;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 10px;

  &__checkbox {
    opacity: 0;


    ~ label {
      margin-left: 10px;
        &::before { 
            content: '';
            width: 20px;
            height: 20px;
            top:1px;
            left: 0px;
            text-align: center;
            color: white;
            line-height: 1em;
            border: 1px solid grey;
            border-radius: 0.25em;
            position: absolute;
            display: inline-block;
            transition: 0.1s ease;
            border-radius: 50px;
        }
    }

    &:checked{
        ~label {
            &::before{
                content: '\2022';
                border: 1px solid  #00BDD3;
                color: #00BDD3;
                font-size: 20px;
            }
        }
    }
  }
}
</style>