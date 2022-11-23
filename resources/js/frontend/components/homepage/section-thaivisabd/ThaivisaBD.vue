<script>
import { inject } from 'vue';
import './thaivisa-bd.css'
export default{
    setup(){
        let image_url = inject('image_url')
        let thaivisabd_first = image_url+'/assets/images/home/thaivisabd-1.png'
        let thaivisabd_second = image_url+'/assets/images/home/thaivisabd-2.png'
        let thaivisabd_third = image_url+'/assets/images/home/thaivisabd-3.png'
        let arrow_right = image_url+'/assets/images/icon/right-arrow.png'
        // let image_bg = "background:url()"

        return{
            image_url,
            thaivisabd_first,
            thaivisabd_second,
            thaivisabd_third,
            arrow_right
        }
    }
}
</script>

<template>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:mt-20">
   <div class="flex lg:flex-col px-10 sm:px-1 md:flex-col sm:flex-col items-center mb-40" data-aos="fade-up">
    <div class="ml-53 relative">
       <img  class="w-100" :src="thaivisabd_first" alt="">
        
    </div>
    <div class="-mt-20 ml-28 absolute">
        <img class="w-100" :src="thaivisabd_second" alt="">
    </div>
    <div class="mt-60 mr-36 absolute">
        <img class="w-100" :src="thaivisabd_third" alt="">
    </div> 
   </div>
    <div class="px-10 mb-14">
        <h4 class="text-base uppercase text-slate-900 opacity-60" data-aos="fade-up">About thaivisabd</h4>
        <h2 class="text-3xl font-bold mt-3  leading-10" data-aos="fade-up">Thailand Visa Application Center</h2>
        <p class="text-xl mt-6 leading-9 opacity-90 text-slate-900" data-aos="fade-up">Sponsoring and managing work visas parts now becoming results in the experience.</p>
        <p class="leading-7 mt-6 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
        <div class="flex items-center mt-5" data-aos="fade-up">
            <a class="btn__bg flex items-center  py-5 px-10 " href="#"><span class="text-white font-normal">Learn More</span> <img class="ml-2" :src="arrow_right" alt=""/></a>
            
        </div>
    </div>
</div>
</template>