<script>
import { inject, ref } from 'vue'
import {useRoute} from 'vue-router'
export default{
    setup(){
        let route = useRoute()
        let image_url = inject('image_url')
        let title = ref("")
        let banner__image = ref(null)
        let banner__image_effect = image_url+'/assets/images/effect/banner-effect.png'
        

        if(route.name == "Tourist"){
            title.value = "Tourist Visa"
            banner__image = image_url+'/assets/images/pages/banner/tourist.png'
        }
        if(route.name == "Medical"){
            title.value = "Medical Visa"
            banner__image = image_url+'/assets/images/pages/banner/medical.png'
        }
        if(route.name == "Transit"){
            title.value = "Transit Visa"
            banner__image = image_url+'/assets/images/pages/banner/transit.png'
        }
        if(route.name == "NonImmigrant"){
            title.value = "Non Immigrant Visa"
            banner__image = image_url+'/assets/images/pages/banner/non-immigrant.png'
        }
        if(route.name == "GroupTravel"){
            title.value = "Group Travel Visa"
            banner__image = image_url+'/assets/images/pages/banner/group-travel.png'
        }
        if(route.name == "DiplomaticAndOfficialPassport"){
            title.value = "Diplomatic And Official Passport"
            banner__image = image_url+'/assets/images/pages/banner/diplomatic-official-passport.png'
        }
        if(route.name == "ForeignPassport"){
            title.value = "Foreign Passport"
            banner__image = image_url+'/assets/images/pages/banner/foreign-passport.png'
        }
        if(route.name == "AboutUs"){
            title.value = "About Us"
            banner__image = image_url+'/assets/images/pages/banner/aboutus.png'
        }
        if(route.name == "ContactUs"){
            title.value = "Contact Us"
            banner__image = image_url+'/assets/images/pages/banner/contactus.png'
        }
        if(route.name == "ApplicationForm"){
            title.value = "Application"
            banner__image = image_url+'/assets/images/pages/banner/contactus.png'
        }
        if(route.name == "Appointment"){
            title.value = "Appointment"
            banner__image = image_url+'/assets/images/pages/banner/aboutus.png'
        }
        return{route, title, image_url, banner__image, banner__image_effect}
    }
}
</script>

<template>
    <div class="grid grid-cols-1 relative">
            <div class="page__banner__area w-100 h-52" :style="'background-image:url('+banner__image+')'">
               
                <img class="absolute h-48 w-screen" :src="banner__image_effect" alt="">
                <h1 class="text-5xl mt-14 px-10 inline-block align-middle text-white font-bold">{{title}}</h1>
                <div class="flex items-center mt-5 gap-2 px-10">
                    <a href="#"><i class="fa fa-home text-rose-600 text-lg"></i></a>
                    <a class="text-white text-lg" href="#">Home</a>
                    <a class="text-white text-lg"><i class="fa fa-arrow-right text-rose-600 text-lg"></i></a>
                    <a class="text-white text-lg capitalize" href="#">{{title}}</a>
                </div>

            </div>
        </div>
</template>