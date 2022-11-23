<script>
// import './tourist-visa.css'
import { inject } from 'vue';
import Layout from '../../core/Layout.vue'
import {PageBanner, ContentTab} from '../../components/page'
import {Sidebar, PageContent} from '../../containers'
import {useRoute, useRouter} from 'vue-router'
export default{
    components:{
        Layout,
        PageBanner,
        ContentTab,
        Sidebar,
        PageContent,
    },

    setup(){
       
        
        return{ 
           
        }
    }
}
</script>

<template>
    <Layout>
        
       <!-- page banner  -->
       <PageBanner/>

       <!-- page tabs  -->
       <ContentTab/>

        <div class="sm:flex w-full mt-14">
            <!-- sidebar  -->
            <Sidebar/>
            <!-- page content  -->
            <PageContent/>

        </div>
    </Layout>
</template>