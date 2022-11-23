<script>
import {useRoute, useRouter} from 'vue-router'
export default {
 setup() {
    let route = useRoute()
    let router = useRouter()

    return{
        route,
        router,
    }
 }
   
    
}
</script>

<template>    
 <div class="grid sm:grid-cols-7 bg-slate-50">
           <router-link class="grid place-items-center py-2 px-2 hover:bg-rose-600 hover:text-white" :class="{'bg-rose-600 text-white':route.path == '/tourist-visa'}" to="/tourist-visa">Tourist Visa</router-link>
           <router-link class="grid place-items-center py-2 px-2 hover:bg-rose-600 hover:text-white" :class="{'bg-rose-600 text-white':route.path == '/medical-visa'}" to="/medical-visa">Medical Visa</router-link>
           <router-link class="grid place-items-center py-2 px-2 hover:bg-rose-600 hover:text-white" :class="{'bg-rose-600 text-white':route.path == '/transit-visa'}" to="/transit-visa">Transit Visa</router-link>
           <router-link class="grid place-items-center py-2 px-2 hover:bg-rose-600 hover:text-white" :class="{'bg-rose-600 text-white':route.path == '/group-travel-visa'}" to="/group-travel-visa">Group Travel Visa</router-link>
           <router-link class="grid place-items-center py-2 px-2 hover:bg-rose-600 hover:text-white" :class="{'bg-rose-600 text-white':route.path == '/non-immigrant-visa'}" to="/non-immigrant-visa">Non Immigrant Visa</router-link>
           <router-link class="grid place-items-center py-2 px-2 hover:bg-rose-600 hover:text-white" :class="{'bg-rose-600 text-white':route.path == '/diplomatic-and-official-passport'}" to="/diplomatic-and-official-passport">Diplomatic & Official Passport</router-link>
           <router-link class="grid place-items-center py-2 px-2 hover:bg-rose-600 hover:text-white" :class="{'bg-rose-600 text-white':route.path == '/foreign-passport'}" to="/foreign-passport">Foreign Passport</router-link>
       </div>
</template>