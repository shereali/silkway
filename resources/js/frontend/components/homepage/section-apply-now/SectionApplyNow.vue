<script>
import { inject } from 'vue';
import './apply-now.css'

export default{
    setup(){
        let image_url = inject('image_url')

        let card_image = image_url+'/assets/images/home/apply-now.png'
        let ellipse_first = image_url+'/assets/images/effect/ellipse-1.png'
        let ellipse_second = image_url+'/assets/images/effect/ellipse-2.png'
        let right_arrow = image_url+'/assets/images/icon/right-arrow.png'

        return{
            image_url,
            card_image,
            ellipse_first,
            ellipse_second,
            right_arrow
        }
    }
}
</script>

<template>
  <div class="grid sm:grid-cols-3 gap-y-0 gap-x-0 mx-14 sm:mx-32 mt-10 relative ...">
    <div class="bg-rose-600">
        <img :src="card_image" alt="">
        
    </div>
    <div class="bg-rose-600 sm:col-span-2 grid place-items-center sm:px-0 px-10 py-5 sm:py-10">
        <div>
            <img class="absolute right-0 -mt-5 sm:top-0" :src="ellipse_second" alt="">
            <h2 class="text-3xl sm:text-5xl text-white">Ready to Make Your Visa?</h2>
            <p class="text-white py-3 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit utelit tellus luctus nec ullamcorper mattis.</p>
            
                <a class="inline-block px-14 py-3 border border-gray-200" href="#" target="_blank" rel="noopener noreferrer"><span class="text-white">Apply Now </span> <img class="absolute -mt-5 ml-20" :src="right_arrow" alt=""></a>
                
                <img class="absolute sm:left-64 -mt-10" :src="ellipse_first" alt="">
            
        </div>
    </div>
    <div class="grid place-items-center h-48 bg-gray-100 border border-zinc-200 ...">
        <div class="text-center">
            <h2 class="text-5xl font-bold">590</h2>
            <p>
                <p>WE Have Worked </p>
                <p>With Clients</p>
            </p>
        </div>
    </div>
    <div class="grid place-items-center h-48 bg-gray-100 border border-zinc-200 ...">
        <div class="text-center">
            <h2 class="text-5xl font-bold">99%</h2>
            <p>
                <p>Successfull Visa </p>
                <p>Process Rate</p>
            </p>
        </div>

    </div>
    <div class="grid place-items-center h-48 bg-gray-100 border border-zinc-200 ...">
        <div class="text-center">
            <h2 class="text-5xl font-bold">590</h2>
            <p>
                <p>Application Approval </p>
                <p>Time We Follow</p>
            </p>
        </div>

    </div>
  </div>
</template> 
