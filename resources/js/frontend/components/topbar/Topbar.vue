<script>
import { inject } from 'vue';
import './topbar.css'

export default {
    setup(){
    let image_url = inject('image_url')
    let email = image_url+'/assets/images/icon/email.png'
    let phone = image_url+'/assets/images/icon/phone.png'
    let facebook = image_url+'/assets/images/icon/facebook.png'
    let twitter = image_url+'/assets/images/icon/twitter.png'
    let linkedin = image_url+'/assets/images/icon/linkedin.png'

    return{
        image_url,
        email,
        phone,
        facebook,
        twitter,
        linkedin,
    }    
},


}
</script>

<template>

<nav class="bg-gray-900 px-2 sm:px-4 py-1 fixed dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="container flex sm:flex-wrap items-center justify-between mx-auto">
  <div href="https://flowbite.com/" class="flex items-center">
      <img :src="email" class=" mr-1 w-100" alt="Flowbite Logo">
      <a class="self-center sm:text-base text-xs ml-1 font-semibold whitespace-nowrap text-white">supportsilkwaysgroup@com</a>
      <img :src="phone" class="ml-2 sm:ml-5 w-100" alt="Flowbite Logo">
      <a class="self-center sm:text-base text-xs ml-1 font-semibold whitespace-nowrap text-white">+123-332-087</a>
  </div>
  <div class="flex md:order-2">
      <a type="button" class="text-white font-medium  text-sm py-2.5 mr-1 text-center mx-1"><img :src="facebook" alt="">
    </a>
      <a type="button" class="text-white font-medium  text-sm py-2.5 mr-2 text-center mx-1"><img :src="twitter" alt="">
    </a>
      <a type="button" class="text-white font-medium  text-sm py-2 text-center"><img :src="linkedin" alt="">
    </a>
      
  </div>
 
  </div>
</nav>

</template>