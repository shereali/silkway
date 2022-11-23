<script>
import { inject } from 'vue';
import './home-banner.css'
export default {
    setup(){
        let image_url = inject('image_url')
        let banner_effect = image_url+'/assets/images/home/home-banner-effect.png'

        return{
            image_url,
        banner_effect,
        }
    }
}
</script>

<template>

<div class=" bg-gray-900  dark:bg-gray-900 z-20 home__banner w-full bg-no-repeat object-fill border-gray-200 dark:border-gray-600">
  <div class="flex flex-wrap relative items-center  justify-between mx-auto">
    <img class="absolute w-screen top-0" :src="banner_effect" alt="">
    <div class="mx-10 mt-20" data-aos="fade-up">
               <h1 class="home__banner__big__text__section text-3xl sm:text-5xl text-white my-4" data-aos-anchor-placement="top-bottom">Welcome To </h1>
                <h1 class="home__banner__big__text__section text-3xl sm:text-5xl text-white my-2" data-aos-anchor-placement="top-bottom">Thailand Visa Application Website  For Bangladesh</h1>
                <p class="home__banner_paragraph_section text-white" data-aos-anchor-placement="top-bottom">
                    Thailand E-Visa on Arrival  We bring to you easier, faster and hassle-free Thailand Visa, 100% online in 24 hours only!
                </p>
    </div> 
    
  </div>    
</div>
</template>