
import '../bootstrap'
import { createApp, h } from 'vue'
import axios from 'axios'
import master from '../../core/Master.vue'
import router from '../routes/routes-config'
import store from '../store/store'

import '../../core/master.css'

import AOS from "aos";
import 'aos/dist/aos.css'

axios.defaults.withCredentials = true;

const lang = localStorage.getItem('lang') || 'en'
axios.defaults.headers['Accept-Language'] = lang


const app = createApp({
    created() {
        const userInfo = localStorage.getItem("user");
        if (userInfo) {
            const userData = JSON.parse(userInfo);
            this.$store.commit("setUserData", userData);
        }
        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    this.$store.dispatch('signOut')
                }
                return Promise.reject(error)
            }
        )
    },
    render:()=>h(master)
})

let userInfo = localStorage.getItem('user')
let userJson = JSON.parse(userInfo)
app.provide('user',userJson)
app.provide('base_url', window.location.origin)
app.provide('image_url', window.location.origin)
app.AOS = new AOS.init()
app.use(AOS)
app.use(store)
app.use(router)
app.mount("#app_frontend")