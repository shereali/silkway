<script>
import { inject } from 'vue';
import './section-contactus.css'

export default{
    setup(){
        let image_url = inject('image_url')

        let application__center__section_img = image_url+'/assets/images/home/contact-us.png'

        return{
            image_url,
            application__center__section_img
        }
    }
}
</script>

<template>
    <div class="grid grid-cols-1">
        <div class="contact__us bg-auto bg-no-repeat bg-center sm:h-96 opacity-90 py-5 relative ...">
            <div class="inline-block align-middle px-10">
            <h3 class="inline-block align-text-top sm:py-5 sm:mt-20 leading-10 text-lg sm:text-xl text-white">VISA  APPLICATION</h3>
            <div class="grid grid-cols-3 gap-3">
                <h2 class="col-span-4 sm:leading-10 text-3xl sm:text-5xl text-white">Contact Us if  You Are Looking for a Visa Application</h2>
                <a class="sm:col-end-6 md:col-end-6 bg-rose-600 text-white py-3 sm:px-10 px-5 mb-3 rounded-sm " href="#" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </div>
            <p class="text-sm sm:leading-8 text-white">
                Need a consultation? call us today +123-321 or email us : hello@gmail.com
            </p>
            </div>
            
        </div>
    </div>
</template> 