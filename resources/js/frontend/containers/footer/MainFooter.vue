<script>
import { inject } from 'vue';
import './footer.css'
export default {
 name:"MainFooter",
 setup(){
    let image_url = inject('image_url');
    let logo = image_url+'/assets/images/logo/logo.png'
    let arrow_right = image_url+'/assets/images/icon/caret-right.png'

    return{
        image_url,
        logo,
        arrow_right,
    }
 }
}
</script>

<template>
    <div class="grid grid-cols-1  sm:grid-cols-5 gap-3 bg-slate-900 py-20 px-10" data-aos="fade-up">
        <div class="col-span-1">
            <div class="logo">
                <img :src="logo" alt="">
            </div>
            <div class="introduction">
                <p class="text-white py-10 text-justify font-medium leading-4 text-xs capitalize ">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </p>
            </div>
        </div>
        <div class="">
            <h3 class="footer__headline_color text-2xl ... font-thin sm:text-center text-left">Quick Links</h3>
            <ul class="pl-0 sm:pl-20 mt-2">
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Home</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">About Us</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Visa</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Coaching</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Country</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Blog</span></a></li>
            </ul>
        </div>
        <div class="">
            <h3 class="footer__headline_color text-2xl ... font-thin">Visa Type</h3>                                                            
            <ul class="mt-2">
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Medical Visa</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Tourist Visa</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Transit Visa</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Non Immigrant Visa</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Group Travel Visa</span></a></li>
            </ul>
        </div>
        <div class="">
            <h3 class="footer__headline_color text-2xl ... font-thin">Shipping Service</h3>                                                            
            <ul class="mt-2">
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Ground Transport</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Cargo </span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Warehousing</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Logistic Service</span></a></li>
                <li><a class="flex items-center" href="#"><img class="" :src="arrow_right" alt="" /> <span class="text-white font-normal font-sm ">Trucking Service</span></a></li>
                
            </ul>
        </div>
        <div class="">
            <h3 class="footer__headline_color text-2xl ... font-thin">Contact</h3>
            <p class="text-white font-normal font-sm ">25 Gulshan Avenue 1212,Bangladesh.</p>
            <p class="py-2 text-white font-normal font-sm ">Tel: +88 02 9888211</p>
            <p class="text-white font-normal font-sm ">Fax: 88 02 9888158,</p>
            <p class="text-white font-normal font-sm ">Email: hello@silkways.net</p>
        </div>
    </div>
    <div class="copy__right__section flext place-content-center w-full bg-slate-900 px-10">
        <div class="grid place-content-center border-t-2 border-rose-600 py-5">
            <p class="text-md text-white">&copy; 2015 <span class="text-rose-600">Unload</span> - All Rights Reserved - Made By Zoom IT</p>
        </div>
    </div>
</template>