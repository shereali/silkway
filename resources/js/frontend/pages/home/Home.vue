<script>
import Layout from '../../core/Layout.vue'
import { HomeBanner, Search, ThaivisaBD, SectionContactUs, SectionVisaType, SectionApplicationCenter, SectionApplyNow, SectionFly, SectionBlog, SectionMap } from '../../components';
import './home.css'
export default{
    name:"Home",

    components:{
        Layout,
        HomeBanner,
        Search,
        ThaivisaBD,
        SectionContactUs,
        SectionVisaType,
        SectionApplicationCenter,
        SectionApplyNow,
        SectionFly,
        SectionBlog,
        SectionMap,
    }
    
}
</script>

<template>
    <Layout>
        <div class="relative ...">
            <HomeBanner/>
            <Search/>
            <ThaivisaBD/>
            <SectionContactUs/>
            <SectionVisaType/>
            <SectionApplicationCenter/>
            <SectionApplyNow/>
            <SectionFly/>
            <SectionBlog/>
            <SectionMap/>


        </div>
    </Layout>
</template>