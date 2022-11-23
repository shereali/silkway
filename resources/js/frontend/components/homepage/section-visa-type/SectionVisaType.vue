<script>
import { inject } from 'vue';
import './visa-type.css';

export default{
    setup(){
        let image_url = inject('image_url')
        let tourist_visa = image_url+'/assets/images/icon/tourist-visa.png'
        let medical_visa = image_url+'/assets/images/icon/medical-visa.png'
        let transit_visa = image_url+'/assets/images/icon/transit-visa.png'
        let business_visa = image_url+'/assets/images/icon/business-visa.png'
        let non_immigrant_visa = image_url+'/assets/images/icon/non-immigrant-visa.png'
        let group_travel_visa = image_url+'/assets/images/icon/group-travel-visa.png'

        return{
            image_url,
            tourist_visa,
            medical_visa,
            transit_visa,
            business_visa,
            non_immigrant_visa,
            group_travel_visa,
        }
    }
}
</script>

<template>
    <div class="flex flex-col items-center py-10">
            <h2 class="title__text__primary__color text-3xl font-bold">Visa Type</h2>
            <p class="sm:px-32 px-10 py-5 text-sm leading-5 p__color text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit, curabitur dictumst diam cum ligula purus fringilla, pretium felis dapibus proin sem scelerisque. Erat per primis quis pharetra massa blandit donec fames</p>
    </div>
    <div class="grid sm:grid-cols-3 grid-cols-1 gap-y-2 gap-x-2 sm:px-32 px-10 mb-20">
        <div class="h-80 sm:h-80 border bg-pink-50 border-slate-200 hover:border-slate-300 text-center" data-aos="fade-up">
            <div class="inline-block align-middle"> 
                <div class="icon__area w-14 h-14 rounded-sm inline-block align-middle mt-14">
                    <img class="inline-block align-middle mt-3.5" :src="tourist_visa" alt="">
                </div>           
                <h3 class="leading-9 mt-2">
                    Tourist Visa
                </h3>
                <p class="leading-5 px-3 mt-2 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                </p>
                <a class="border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white leading-10 rounded-full px-6 inline-block align-bottom mt-6" href="#" target="_blank" rel="noopener noreferrer">View More</a>
            </div>
        </div>
        <div class="h-80 sm:h-80 border bg-slate-50 border-slate-200 hover:border-slate-300 text-center" data-aos="fade-up">
            <div class="inline-block align-middle"> 
                <div class="icon__area w-14 h-14 rounded-sm inline-block align-middle mt-14">
                    <img class="inline-block align-middle mt-3.5" :src="tourist_visa" alt="">
                </div>           
                <h3 class="leading-9 mt-2">
                    Tourist Visa
                </h3>
                <p class="leading-5 px-3 mt-2 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                </p>
                <a class="border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white leading-10 rounded-full px-6 inline-block align-bottom mt-6" href="#" target="_blank" rel="noopener noreferrer">View More</a>
            </div>
        </div>
         <div class="h-80 sm:h-80 border bg-pink-50 border-slate-200 hover:border-slate-300 text-center" data-aos="fade-up">
            <div class="inline-block align-middle"> 
                <div class="icon__area w-14 h-14 rounded-sm inline-block align-middle mt-14">
                    <img class="inline-block align-middle mt-3.5" :src="tourist_visa" alt="">
                </div>           
                <h3 class="leading-9 mt-2">
                    Tourist Visa
                </h3>
                <p class="leading-5 px-3 mt-2 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                </p>
                <a class="border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white leading-10 rounded-full px-6 inline-block align-bottom mt-6" href="#" target="_blank" rel="noopener noreferrer">View More</a>
            </div>
        </div>
         <div class="h-80 sm:h-80 border bg-slate-50 border-slate-200 hover:border-slate-300 text-center" data-aos="fade-up">
            <div class="inline-block align-middle"> 
                <div class="icon__area w-14 h-14 rounded-sm inline-block align-middle mt-14">
                    <img class="inline-block align-middle mt-3.5" :src="tourist_visa" alt="">
                </div>           
                <h3 class="leading-9 mt-2">
                    Tourist Visa
                </h3>
                <p class="leading-5 px-3 mt-2 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                </p>
                <a class="border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white leading-10 rounded-full px-6 inline-block align-bottom mt-6" href="#" target="_blank" rel="noopener noreferrer">View More</a>
            </div>
        </div>
         <div class="h-80 sm:h-80 border bg-pink-50 border-slate-200 hover:border-slate-300 text-center" data-aos="fade-up">
            <div class="inline-block align-middle"> 
                <div class="icon__area w-14 h-14 rounded-sm inline-block align-middle mt-14">
                    <img class="inline-block align-middle mt-3.5" :src="tourist_visa" alt="">
                </div>           
                <h3 class="leading-9 mt-2">
                    Tourist Visa
                </h3>
                <p class="leading-5 px-3 mt-2 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                </p>
                <a class="border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white leading-10 rounded-full px-6 inline-block align-bottom mt-6" href="#" target="_blank" rel="noopener noreferrer">View More</a>
            </div>
        </div>
         <div class="h-80 sm:h-80 border bg-slate-50 border-slate-200 hover:border-slate-300 text-center" data-aos="fade-up">
            <div class="inline-block align-middle"> 
                <div class="icon__area w-14 h-14 rounded-sm inline-block align-middle mt-14">
                    <img class="inline-block align-middle mt-3.5" :src="tourist_visa" alt="">
                </div>           
                <h3 class="leading-9 mt-2">
                    Tourist Visa
                </h3>
                <p class="leading-5 px-3 mt-2 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                </p>
                <a class="border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white leading-10 rounded-full px-6 inline-block align-bottom mt-6" href="#" target="_blank" rel="noopener noreferrer">View More</a>
            </div>
        </div>
    </div>
</template> 