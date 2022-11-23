<script>
import {inject, ref} from 'vue'
import './navbar.css';
import {useRoute, useRouter} from 'vue-router'
export default {
  setup() {
    let route = useRoute()
    let router = useRouter()
    let image_url = inject('image_url')
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    let logo = image_url+'/assets/images/logo/logo-navbar.png'
    let text__color = ref("")

    if(route.name == "Tourist" || route.name == "Medical" || route.name == "Transit" || route.name == "GroupTravel" || route.name == "NonImmigrant" || route.name == "DiplomaticAndOfficialPassport" || route.name == "ForeignPassport"){
      text__color.value = "text-rose-600"
    } else {
      text__color.value = ""
    }

    return { 

      showMenu, 
      toggleNav, 
      logo,
      route,
      router,
      text__color,

    };
  },
};

</script>

<!-- This example requires Tailwind CSS v3.0+ -->
<template>
<div class="bg-white mb-32">
    <nav
      class="
        fixed
        w-full top-0 left-0
        mt-11
        px-6
        py-5
        z-20
        bg-white
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="
            text-xl
            font-bold
            text-gray-100
            md:text-2xl
            hover:text-indigo-400
          "
          > <img class="w-100" :src="logo" alt="">
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
        <li class="" :class="{'text-rose-600':route.path == '/'}"><router-link to="/">HOME</router-link></li>
        <li class="" :class="text__color"><router-link to="/tourist-visa">THAI VISA</router-link></li>
        <li class="" :class="{'text-rose-600':route.path == '/about-us'}"><router-link to="/about-us">ABOUT US</router-link></li>
        <li class="" :class="{'text-rose-600':route.path == '/contact-us'}"><router-link to="/contact-us">CONTACT US</router-link></li>
        <li class="silkway__btn text-white py-3 px-5  rounded ..." :class="{'bg-rose-600 text-white':route.path == '/appointment'}"><router-link to="/appointment">APPOINTMENT</router-link></li>
        <li class="silkway__btn text-white py-3 px-5  rounded ..." :class="{'bg-rose-600 text-white':route.path == '/application'}"><router-link to="/application">APPLY NOW</router-link></li>
      </ul>
    </nav>
  </div>

</template>
