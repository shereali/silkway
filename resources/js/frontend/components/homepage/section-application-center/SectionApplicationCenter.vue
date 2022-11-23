<script>
import { inject } from 'vue';
import './application-center.css'

export default{
    setup(){
        let image_url = inject('image_url')

        let user_skilled = image_url+'/assets/images/icon/user-skilled.png'
        let users = image_url+'/assets/images/icon/users.png'
        let clock = image_url+'/assets/images/icon/clock.png'
        let badge = image_url+'/assets/images/icon/badge.png'

        return{
            image_url,
            user_skilled,
            users,
            clock,
            badge,
        }
    }
}
</script>

<template>
    <div class="application__center__section object-scale-down  w-100 sm:py-10 py-3">
        <div class="flex flex-col items-center mt-5 sm:mt-20">
            <h2 class="text-white sm:text-5xl text-2xl font-bold">Thailand Visa Application Center</h2>
            <p class="sm:px-32 px-10 py-5 text-base text-white leading-5 text-center">Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-6 px-14 sm:py-14 sm:mt-10">
            <div class="flex items-center" data-aos="fade-up">
                <img :src="user_skilled" alt="">
                <div class="text__area">
                    <P class="text-white text-4xl ml-2">20 +</P>
                    <P class="text-white ml-2 uppercase">YEAR OF EXPERICE</P>
                </div>
            </div>
            <div class="flex items-center" data-aos="fade-up">
                <img :src="users" alt="">
                <div class="text__area">
                    <P class="text-white text-4xl ml-2">100%</P>
                    <P class="text-white ml-2 uppercase">YEAR OF EXPERICE</P>
                </div>
            </div>
            <div class="flex items-center" data-aos="fade-up">
                <img :src="clock" alt="">
                <div class="text__area">
                    <P class="text-white text-4xl ml-2">100%</P>
                    <P class="text-white ml-2 uppercase">YEAR OF EXPERICE</P>
                </div>
            </div>
            <div class="flex items-center" data-aos="fade-up">
                <img :src="badge" alt="">
                <div class="text__area">
                    <P class="text-white text-4xl ml-2">20 +</P>
                    <P class="text-white ml-2 uppercase">YEAR OF EXPERICE</P>
                </div>
            </div>
        </div>
    </div>
    
   
</template> 