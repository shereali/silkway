<script>
import { inject } from 'vue';
import './fly.css'

export default{
    setup(){
        let image_url = inject('image_url')

        let fly = image_url+'/assets/images/home/section-fly.png'
        let fly_effect = image_url+'/assets/images/effect/section-fly-effect.png'

        return{
            image_url,
            fly,
            fly_effect,
        }
    }
}
</script>

<template>
    <div class="grid sm:grid-cols-3">
        <div class="grid place-items-center bg-rose-600">
            <div class="px-5">
                <h2 class="text-2xl sm:text-3xl text-white my-5" data-aos="fade-up">Fly Your Dream Destination</h2>
                <p class="text-white my-5" data-aos="fade-up">
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use.
                </p>
                <div class="apply_btn mb-5" data-aos="fade-up">
                    <a class="bg-white text-rose-600 rounded-full py-2 px-5 leading-10" href="#" target="_blank" rel="noopener noreferrer">Apply Now</a>
                </div>
                
            </div>
        </div>
        <div class="sm:col-span-2 relative" data-aos="fade-up">
            <img :src="fly" alt="">
            <img class="top-0 left-0 right-0 absolute" :src="fly_effect" alt="">
        </div>
    </div>
</template> 