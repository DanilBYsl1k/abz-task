<template>
  <div class="input-wrapper">
    <input 
      class="input-wrapper__input"
      :placeholder="label" 
      :type="type"
      v-model="value"
      :name="name"
    >
    <div v-if="errorMessage" class="input-box__alert-error">
      {{ errorMessage }}
    </div> 
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  label: {
      type: String,
      default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: 'text' | 'number' | 'phone',
  }
})

const { value, errorMessage } = useField(() => props.name);
const emit = defineEmits(['update:value']);
</script> 

<style lang="scss" scoped>
.input-wrapper {

  &__input {
    width: 100%;
    padding: 16px;
    color: #7E7E7E;
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    background-color: transparent;
  }

}
</style>