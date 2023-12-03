<template>
    <section class="test-assignment">
      <div class="test-assignment__container container fx-column justify-content-center align-items-center">
        <div class="test-assignment__box">
          <h1>Test assignment for front-end developer</h1>
          <p class="test-assignment__info">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
          <a class="test-assignment__sign-up button" href="#post">Sign up</a>
        </div>
      </div>
    </section>

    <section class="get-request" id="get">
      <div class="get-request__container container">
        <h2 class="title">Working with GET request</h2>
          <div class="get-request__user-list fx justify-content-center fx-wrap">
            <template v-if="users">
              <CardComponent v-for="card of users.users" :user="card"/>
            </template>
          </div>

          <div v-if="users.links.next_url" class="get-request__show-more fx justify-content-center ">
            <ButtonComponent @click="nextUserList(users.links.next_url)" label="Show more"/>
          </div>
      </div>
    </section>

    <section class="post-request" id="post">
      <div class="post-request__container container">
        <h2 class="title">Working with POST request</h2>
        <form class="post-request__form fx-column align-items-center ">
          <div>
            <div class="post-request__user-input-info fx-column">
              <InputComponent name="name" width="100%" type="text" label="Your name" :errors="[]" />
              <InputComponent name="email" width="100%" type="email" label="Email" :errors="[]" />
              <div>
                <InputComponent name="phone" width="100%" type="phone" label="Phone" :errors="[]" />
                <span class="post-request__phone-example">+38 (XXX) XXX - XX - XX</span>
              </div>
            </div>

          <div>
            <p>Select your position</p>
            <template v-for="position of positionList" :key="position.id">
              <Field v-slot="{ field }" class="post-request__checkbox-list" name="position_id" type="radio" :value="position.id">
                <div class="checkbox-wrapper">
                  <input class="checkbox-wrapper__checkbox" type="radio" name="position_id" v-bind="field" :id="'position_' + position.id"/>
                  <label :for="'position_' + position.id">{{ position.name }}</label>
                </div>
              </Field>
            </template>
          </div>

          <Field name="photo" v-slot="{handleChange}">
            <div class="file-box">
              <input type="file" class="file-box__file" accept=".jpg, .jpeg"  @change=" handleChange" multiple/>
            </div>
          </Field>

          <div class="post-request__submit fx justify-content-center">
            <ButtonComponent 
              @click.prevent="onSubmit()" 
              type="submit" 
              label="Sign up" 
              width="100%"
              :disabled="isSubmitting"/>
          </div>
          </div>
        </form>
      </div>
    </section>

<PreloaderComponent v-if="preloader"/>
<AlertComponent v-if="userCreateAlert"/>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import { useForm, Field  } from 'vee-validate'; 
import * as yup from 'yup';

import { userClass }  from '../services/Users';
import ButtonComponent from '../components/Button.vue';
import CardComponent from '../components/Card.vue';
import InputComponent from '../components/Input.vue';
import PreloaderComponent from '../components/Preloader.vue';
import AlertComponent from '../components/Alert.vue';

const users = ref({links: { next_url: null }});
const positionList = ref({});
let preloader = ref(true);
let userCreateAlert = ref(false);


const { handleSubmit, isSubmitting } = useForm({
  validationSchema: {
    name: yup.string().min(2).max(60).required(),
    phone: yup.string().matches(/^[\+]{0,1}380([0-9]{9})$/,'not valid phone number').required(),
    email: yup.string().email().required(),
    position_id: yup.number().min(1).required(),
  }
});

const nextUserList = async (link) => {
  if(link) {
    preloader.value = true; 
    users.value = { ...await userClass.userList(link)}  
    preloader.value = false;
  }
}
const getUserList = async () => {
  users.value = await userClass.userList();
  userCreateAlert.value = false;
}
const onSubmit = handleSubmit(
  values => {
    let maxAllowedSize = 5000000;

    if ( values.photo[0].size > maxAllowedSize) {
			alert("Photo size cannot be more than 5mb");
      return
    }

    userClass.create({ ...values, photo: values.photo[0]}).then(()=> { getUserList() });
    userCreateAlert.value = true
  }
)

onMounted(async () => {
  await getUserList();
  positionList.value = await userClass.userPosition();
  preloader.value = false;
});
</script>

<style lang="scss" scoped>
@import '../styles/mixins/adaptive';
.test-assignment {
  &__container {
    text-align: center;
    background: url('../assets/imgs/background.jpg') no-repeat center;
    height: 650px;
  }
  
  &__box {
    color: white;
    max-width: 380px;
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

.post-request {
  
  &__checkbox-list {
    margin-bottom: 7px;
  }
  
  &__user-input-info {
    gap: 50px;
  }

  &__phone-example {
    color: #7E7E7E;
    font-size: 12px;
    margin-left:20px ;
  }

  &__submit {
    margin-top: 52px;
  }

  .checkbox-wrapper {
    margin-bottom: 8px;
  }
  .file-box {

    margin-top: 40px;
    border-radius: 4px;
    outline: 1px solid #D0CFCF;

    &__file {
      &::-webkit-file-upload-button {
        border-radius: 4px 0px 0px 4px;
        background-color: transparent;
        border: 1px solid #000000;
        padding: 15px;
        margin-right: 20px;
      }
    }
  }
}
</style>