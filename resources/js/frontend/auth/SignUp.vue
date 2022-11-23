<template>
    <auth-layout>
        <div>
            <div class="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                <form @submit.prevent="signUp" class="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
                    <h1 class="lg:text-2xl text-xl font-semibold mb-6"> Sign Up </h1>

                    <div class="grid lg:grid-cols-2 gap-3">
                        <div>
                            <label class="mb-0"> First Name </label>
                            <input type="text" name="first_name" v-model="signupForm.first_name" placeholder="Your Name" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                        </div>
                        <div>
                            <label class="mb-0"> Last  Name </label>
                            <input type="text" name="last_name" v-model="signupForm.last_name" placeholder="Last  Name" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                        </div>
                    </div>
                    <!-- <div>
                        <label class="mb-0"> Username </label>
                        <input type="text" name="username" v-model="signupForm.username" placeholder="Username" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                    </div> -->
                    <div>
                        <label class="mb-0"> Email Address </label>
                        <input type="email" name="email" v-model="signupForm.email" placeholder="Info@example.com" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                    </div>
                    <div>
                        <label class="mb-0"> Password </label>
                        <input type="password" name="password" v-model="signupForm.password" placeholder="******" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                    </div>
                    
                    <div class="grid lg:grid-cols-2 gap-3">
                        <div>
                        <label class="mb-0"> Gender </label>
                        <select name="gender" v-model="signupForm.gender" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                            <option value="" disabled selected>Select Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>

                        </div>
                        <div>
                            <label class="mb-0"> Phone: optional  </label>
                            <input type="text" name="phone" v-model="signupForm.phone" placeholder="+543 5445 0543" class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full">
                        </div>
                    </div>

                    <!-- <div class="checkbox">
                        <input type="checkbox" id="chekcbox1" checked="">
                        <label for="chekcbox1"><span class="checkbox-icon"></span> I agree to the <a href="pages-terms.html" target="_blank" class="uk-text-bold uk-text-small uk-link-reset"> Terms and Conditions </a>
                        </label>
                    </div> -->

                    <div>
                        <button type="submit" class="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full">
                            SIGN UP</button>
                    </div>
                </form>


            </div>
        </div>
    </auth-layout>
</template>
<script>
import { reactive } from '@vue/reactivity'
import AuthLayout from './AuthLayout.vue'
import { inject } from '@vue/runtime-core'
import {useStore} from 'vuex'
export default {
    components:{
        AuthLayout
    },
    setup(){
        let store = useStore()
        let signupForm = reactive({gender:""})

        let base_url = inject('base_url')
        
        console.log('base_url', base_url);

      const signUp = ()=>{

          store.dispatch('signUp', signupForm)

        // axios.post(base_url+'/api/signup', signupForm)
        // .then(res=>{

        //     console.log(res);
        //     if(res.data.status == true){
        //         localStorage.setItem('user', JSON.stringify(res.data))
        //         axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`
        //         window.location.href = base_url+'/feed'
        //     }

        // })

      }

      return{
          store,
            signupForm, 
            signUp
        }
    }
}
</script>

 <style scoped>
    input , .selectpicker, .bootstrap-select.btn-group button{
        background-color: #f3f4f6  !important;
        height: 44px  !important;
        box-shadow: none  !important; 
    }
</style>