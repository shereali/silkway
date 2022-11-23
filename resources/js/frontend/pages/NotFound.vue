<script>
import { inject } from 'vue';
import Layout from '../core/Layout.vue';

export default{
    components:{
        Layout
    },
    setup(){
        let image_url = inject('image_url')
        let not_found = image_url+'/assets/images/pages/404.webp'
        return{
            image_url,
            not_found
        }
    }
}
</script>

<template>
    <Layout>
        <div class="flex w-full place-content-center">
            <img class="" :src="not_found" alt="">
        </div>
    </Layout>
</template>