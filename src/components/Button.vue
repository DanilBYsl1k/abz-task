<template>
<button :disabled="disabled" class="button">
  {{ label }}
</button>
</template>
<script setup>
defineProps({
  label: {
      type: String,
      default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

</script>
<style lang="scss">
@import '../styles/variables/color';

  button {
    border: none;
    cursor: pointer;
  }

  .button {
    border-radius: 80px;
    min-width: 100px;
    padding: 8px 20px;
    background-color: $primary_color;
    &:disabled {
      background-color: #B4B4B4;
      color: white;
    }
  }
</style>