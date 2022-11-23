<script>
import { inject } from 'vue';
export default{
    components:{
        
    },

    setup(){
        let image_url = inject('image_url')
        let call_center = image_url+'/assets/images/pages/call-center.png'
 
        return{ 
            image_url,
            call_center,       
        }
    }
}
</script>
<template>
    <div class="call__center grid">
        <div class="call__center__image gap-y-2 mt-10">
            <img class="w-screen" :src="call_center" alt="">
        </div>
        <div class="call__text__area py-5 bg-gray-900 rounded-sm">
            <p class="px-3 text-white">Our Appoinment Service Call Us</p>
            <p class="px-3 py-2 text-xl text-white"><i class="fa fa-volume-control-phone text-white" aria-hidden="true"></i> +8802222288211</p>
        </div>
    </div>
</template>