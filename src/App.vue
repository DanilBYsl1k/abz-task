<template>
  <HeaderComponent></HeaderComponent>

  <main class="main">
    <section class="test-assignment">
      <div class="test-assignment__container container fx-column justify-content-center align-items-center">
        <div class="test-assignment__box">
          <h1>Test assignment for front-end developer</h1>
          <p class="test-assignment__info">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
          <Button class="test-assignment__sign-up" label="sign up"></Button>
        </div>
      </div>
    </section>

    <section class="get-request">
      <div class="get-request__container container">
        <h2 class="title">Working with GET request</h2>
          <div class="get-request__user-list fx justify-content-center fx-wrap">
            <template v-if="userList">
              <Card v-for="card of userList" :user="card"></Card>
            </template>
          </div>

          <div class="get-request__show-more fx justify-content-center ">
            <Button v-if="page" @click="getUserList()" label="Show more"></Button>
          </div>
      </div>
    </section>

    <section class="post-request">
      <div class="post-request__container container">
        <h2 class="title">Working with POST request</h2>
        <div>
          
        </div>
      </div>
    </section>
  </main>

</template>

<script setup>
import { ref, onMounted  } from 'vue';
import axios from 'axios';

import HeaderComponent from "./components/layout/Header.vue";
import Button from './components/Button.vue';
import Card from './components/Card.vue';

const userList = ref(''); 
const page = ref('users?page=1&count=6');

const getUserList = async () => {
  try {
    const respons = await axios.get(page.value);
    const data = respons.data;

    userList.value = data.users;
    if(data.links.next_url) {
      page.value = data.links.next_url.split('v1/')[1];
    }
    else{
      page.value = null;
    }
  } catch (error) {
    return error
  }
}

onMounted(() => {
  getUserList();
})

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
}

.container {
  max-width: 1170px;
  margin: auto;
}

.title {
  text-align: center;
}

.test-assignment {
  &__container {
    text-align: center;
    background: url(assets/imgs/background.jpg) no-repeat;
    background-size: 100%;
    background-position: center;
    height: 650px;
  }
  
  &__box {
    color: white;
    width: 380px;
  }

  &__info {
    margin-bottom: 25px;
  }
  
}

.get-request {

  &__container {
    margin-top: 140px;
  }

  &__user-list {
    margin-top: 50px;
    gap: 29px;
  }

  &__show-more {
    margin-top: 50px;
  }
}
</style>