
<script>
import { inject } from 'vue';
export default{
    components:{

    },

    setup(){
        let image_url = inject('image_url')
        let photo_specification = image_url+'/assets/images/pages/photo-specification.png'
        
        return{ 
            image_url,
            photo_specification,
        }
    }
}
</script>
<template>
    <div class="photo__specification my-5 rounded-sm">
                <h2 class="text-3xl mb-5 grid">Photo Specification:</h2>
                <div class="photo__specification__area grid bg-green-50 place-content-center">
                    <img :src="photo_specification" alt="">
                </div>
            </div>
</template>