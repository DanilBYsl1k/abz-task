<template>
  <div class="card">
    <div>
      <img :src=" user.photo || 'icons/photo-cover.svg'" alt="">
      <p>{{ user.name }}</p>
    </div>
    <div class="card__more-info">
      <p>{{ user.position }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.phone }}</p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss">
.card {
  width: 370px;
  height: 254px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  
  &__more-info {
    margin: 20px;
  }

  p {
    margin: 0;
    padding: 0;
  }

  img {
    border-radius: 50px;
  }
}
</style>