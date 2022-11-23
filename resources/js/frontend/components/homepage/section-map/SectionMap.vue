<script>
import { inject } from 'vue';

export default{
    setup(){
        let image_url = inject('image_url')

        let map_view = image_url+'/assets/images/home/map-view.png'

        return{
            image_url,
            map_view,
        }
    }
}
</script>

<template>
    <div class="map__area w-full relative h-96 bg-gray-100" data-aos="fade-up">
        <img class="absolute object-cover w-100 h-96" :src="map_view" alt="">
        <div class="absolute address__card rounded-md w-80 py-5 px-5 z-10 mt-10 ml-20 top-0 bg-white">
            <div class="our__location grid place-items-center">
                <a class="bg-rose-600 py-2 px-20 rounded-md text-white" href="">Our Location</a>
                
            </div>

            <div class="text__section" data-aos="fade-right">
            
            <h2 class="text-2xl my-5 ml-4">Located in: Taj Marriot</h2>
            
            <p class="leading-6 ml-4">Address: Plot No-SW(I)-4,</p>
            <p class="leading-6 ml-4">25 Gulshan Ave-1,</p>
            <p class="leading-6 ml-4">Dhaka 1212, Bangladesh.</p>
            <p class="leading-6 ml-4">Phone: +8802222288211-17 Ext</p>
            <p class="leading-6 ml-4">Fax: 88 02 9888158 </p>
            <p class="leading-6 ml-4">1 Bir Uttam Mir Shawkat Sarak,</p>
            <p class="leading-6 ml-4">Dhaka 1208</p>
        </div>
            
        </div>
        
    </div>
</template>