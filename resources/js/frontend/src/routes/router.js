import {Home, Tourist, Medical, Transit, GroupTravel, NonImmigrant, DiplomaticAndOfficialPassport, ForeignPassport, AboutUs, ContactUs, ApplicationForm,Appointment, NotFound} from '../../pages'
// import Login from '../../../components/frontend/auth/Login.vue'
// import SignUp from '../../../components/frontend/auth/SignUp.vue'

let routes_frontend = [
   {
       path:'/',
       name:'Home',
       component:Home,
       meta:{
        auth:false
        }
   },
   {
       path:'/tourist-visa',
       name:'Tourist',
       component:Tourist,
       meta:{
        auth:false
        }
   },
   {
       path:'/transit-visa',
       name:'Transit',
       component:Transit,
       meta:{
        auth:false
        }
   },
   {
    path:'/medical-visa',
    name:'Medical',
    component:Medical,
    meta:{
        auth:false
        }
    },
   {
       path:'/group-travel-visa',
       name:'GroupTravel',
       component:GroupTravel,
       meta:{
        auth:false
        }
   },
   {
       path:'/non-immigrant-visa',
       name:'NonImmigrant',
       component:NonImmigrant,
       meta:{
        auth:false
        }
   },
   {
       path:'/diplomatic-and-official-passport',
       name:'DiplomaticAndOfficialPassport',
       component:DiplomaticAndOfficialPassport,
       meta:{
        auth:false
        }
   },
   {
       path:'/foreign-passport',
       name:'ForeignPassport',
       component:ForeignPassport,
       meta:{
        auth:false
        }
   },
   {
       path:'/about-us',
       name:'AboutUs',
       component:AboutUs,
       meta:{
        auth:false
        }
   },
   {
       path:'/contact-us',
       name:'ContactUs',
       component:ContactUs,
       meta:{
        auth:false
        }
   },
   {
       path:'/application',
       name:'ApplicationForm',
       component:ApplicationForm,
       meta:{
        auth:false
        }
   },
   {
       path:'/appointment',
       name:'Appointment',
       component:Appointment,
       meta:{
        auth:false
        }
   },
   {
       path:'/404',
       name:'NotFound',
       component:NotFound,
       meta:{
        auth:false
        }
   },
   {
    path: '/:catchAll(.*)',
    redirect: "/404",
  }

//    {
//        path:'/signin',
//        name:'Login',
//        component:Login,
//        meta:{
//         auth:false
//     }
//    },

//    {
//        path:'/signup',
//        name:'SignUp',
//        component:SignUp,
//        meta:{
//            auth:false
//        }
//    }
]

export default routes_frontend