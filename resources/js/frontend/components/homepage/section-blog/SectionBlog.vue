<script>
import { inject } from 'vue';
import './blog.css'

export default{
    setup(){
        let image_url = inject('image_url')

        let blog_first = image_url+'/assets/images/blog/blog-1.png'
        let blog_second = image_url+'/assets/images/blog/blog-2.png'
        let blog_third = image_url+'/assets/images/blog/blog-3.png'
        let blog_effect = image_url+'/assets/images/effect/blog-effect.png'

        return{
            image_url,
            blog_first,
            blog_second,
            blog_third,
            blog_effect,
        }
    }
}
</script>

<template>
<div class="flex flex-col px-10 bg-slate-50 py-20">
    <h2 class="text-rose-600 text-2xl sm:text-3xl" data-aos="fade-up">Our Latest News Updates for You</h2>

    <div class="grid sm:grid-cols-3 gap-x-6 gap-y-6 my-5">
        <div class="grid place-items-center bg-white shadow-md rounded-md" data-aos="fade-up">
            <div class="banner__section relative">
                <img :src="blog_first" alt="">
                <img class="absolute top-0 right-0" :src="blog_effect" alt="">
                <div class="text__area absolute mr-5 mt-3 top-0 right-0">
                    <p class="text-white font-bold">Jun</p>
                    <p class="text-white font-bold">14</p>
                </div>
            </div>
            <div class="text__section px-5 py-5">
                <h2 class="text-rose-600 text-2xl">Launches Thailand Visa Application center</h2>
                <p class="my-5">Saimon Launches Thailand Visa Application center at Dhaka, Sylhet, Chittagong</p>
                <div>
                    <a class="text-blue-600" href="#" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
            </div>
        </div>
        <div class="grid place-items-center bg-white shadow-md rounded-md" data-aos="fade-up">
            <div class="banner__section relative">
                <img :src="blog_second" alt="">
                <img class="absolute top-0 right-0" :src="blog_effect" alt="">
                <div class="text__area absolute mr-5 mt-3 top-0 right-0">
                    <p class="text-white font-bold">Jun</p>
                    <p class="text-white font-bold">14</p>
                </div>
            </div>
            <div class="text__section px-5 py-5">
                <h2 class="text-rose-600 text-2xl">Launches Thailand Visa Application center</h2>
                <p class="my-5">Saimon Launches Thailand Visa Application center at Dhaka, Sylhet, Chittagong</p>
                <div>
                    <a class="text-blue-600" href="#" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
            </div>
        </div>
        <div class="grid place-items-center bg-white shadow-md rounded-md" data-aos="fade-up">
            <div class="banner__section relative">
                <img :src="blog_third" alt="">
                <img class="absolute top-0 right-0" :src="blog_effect" alt="">
                <div class="text__area absolute mr-5 mt-3 top-0 right-0">
                    <p class="text-white font-bold">Jun</p>
                    <p class="text-white font-bold">14</p>
                </div>
            </div>
            <div class="text__section px-5 py-5">
                <h2 class="text-rose-600 text-2xl">Launches Thailand Visa Application center</h2>
                <p class="my-5">Saimon Launches Thailand Visa Application center at Dhaka, Sylhet, Chittagong</p>
                <div>
                    <a class="text-blue-600" href="#" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template> 