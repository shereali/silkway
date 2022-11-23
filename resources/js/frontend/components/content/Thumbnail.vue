<script>
import { inject, ref } from 'vue'
import {useRoute} from 'vue-router'
export default{
    setup(){
        let route = useRoute()
        let image_url = inject('image_url')
        let page_thumbnail = ref(null)

        if(route.name == "Tourist"){            
            page_thumbnail = image_url+'/assets/images/pages/thumbnail/tourist.png'
        }
        if(route.name == "Medical"){            
            page_thumbnail = image_url+'/assets/images/pages/thumbnail/medical.png'
        }
        if(route.name == "Transit"){            
            page_thumbnail = image_url+'/assets/images/pages/thumbnail/transit.png'
        }
        if(route.name == "NonImmigrant"){            
            page_thumbnail = image_url+'/assets/images/pages/thumbnail/non-immigrant.png'
        }
        if(route.name == "GroupTravel"){            
            page_thumbnail = image_url+'/assets/images/pages/thumbnail/group-travel.png'
        }
        if(route.name == "DiplomaticAndOfficialPassport"){            
            page_thumbnail = image_url+'/assets/images/pages/thumbnail/diplomatic-official-passport.png'
        }
        if(route.name == "ForeignPassport"){            
            page_thumbnail = image_url+'/assets/images/pages/thumbnail/foreign-passport.png'
        }
        if(route.name == "AboutUs"){            
            page_thumbnail = image_url+'/assets/images/pages/thumbnail/aboutus.png'
        }
        if(route.name == "ContactUs"){            
            page_thumbnail = image_url+'/assets/images/pages/thumbnail/contactus.png'
        }
        if(route.name == "ApplicationForm"){            
            page_thumbnail = image_url+'/assets/images/pages/thumbnail/contactus.png'
        }
        if(route.name == "Appointment"){            
            page_thumbnail = image_url+'/assets/images/pages/thumbnail/aboutus.png'
        }
        return{route, image_url, page_thumbnail}
    }
}
</script>

<template>
    <div class="thumbnail__section mb-5">
            <img class="w-100" :src="page_thumbnail" alt="">
        </div>
</template>