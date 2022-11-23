<script>
// import './tourist-visa.css'
import { inject } from 'vue';
import Layout from '../../core/Layout.vue'
import {PageBanner, ContentTab} from '../../components/page'
import {Sidebar, PageContent} from '../../containers'
export default{
    components:{
        Layout,
        PageBanner,
        ContentTab,
        Sidebar,
        PageContent,
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

    <!-- page banner  -->
    <PageBanner/>

    <div class="flex w-full place-content-center">
        <img class="" :src="not_found" alt="">
    </div>
        
    </Layout>
</template>