
<script>
import { inject } from 'vue';
export default{
    components:{
        
    },

    setup(){
        let image_url = inject('image_url')
        let visa__sidebar__table__section = image_url+'/assets/images/pages/world-map.png'
        let visa__sidebar__table__section_effect = image_url+'/assets/images/pages/world-map-effect.png'
        
        
        return{ 
            image_url,
            visa__sidebar__table__section,
            visa__sidebar__table__section_effect,
            
        }
    }
}
</script>
<template>
     <div class="visa__sidebar__table__section__1 my-5">
                    <h2 class="text-center text-3xl my-5">Visa Fees</h2>
                    <ul class="relative bg-white opacity-90 pb-10 rounded-sm">
                    <li class="py-2 px-5 text-center rounded-sm bg-gray-900">
                        <span class="text-white">Toursit Visa</span>   
                    </li>
                    <li class="py-2 px-5  rounded-sm">
                        <router-link class="flex items-center justify-center" to="#">
                            <div class="flex-1">
                                <span class="mr-auto ">Processing time:</span>
                            </div>
                            <span>3-4 day</span>
                        </router-link>  
                    </li>
                    <li class="py-2 px-5  rounded-sm">
                        <router-link class="flex items-center justify-center" to="#">
                            <div class="flex-1">
                                <span class="mr-auto">Stay period:</span>
                            </div>
                            <span>Up to 15 day</span>
                        </router-link>  
                    </li>
                    <li class="py-2 px-5  rounded-sm">
                        <router-link class="flex items-center justify-center" to="#">
                            <div class="flex-1">
                                <span class="mr-auto">Validity:</span>
                            </div>
                            <span>3 month</span>
                        </router-link>  
                    </li>
                    <li class="py-2 px-5  rounded-sm">
                        <router-link class="flex items-center justify-center" to="#">
                            <div class="flex-1">
                                <span class="mr-auto">Entery:</span>
                            </div>
                            <span>Single</span>
                        </router-link>  
                    </li>
                    <li class="py-2 px-5  rounded-sm">
                        <router-link class="flex items-center justify-center" to="#">
                            <div class="flex-1">
                                <span class="mr-auto">Fees: </span>
                            </div>
                            <strong class="xl">BDT  3,000/-</strong>
                        </router-link>  
                    </li>
                    <img class="absolute opacity-10 top-5 w-screen" :src="visa__sidebar__table__section" alt="">
                </ul>
                </div>
</template>