<template>
    <auth-layout>
        <login-form></login-form>
    </auth-layout>
</template>

<script>
import AuthLayout from './layouts/AuthLayout.vue'
import LoginForm from './layouts/LoginForm.vue'
export default {
   components:{
      LoginForm,
      AuthLayout
       
   } 
}
</script>