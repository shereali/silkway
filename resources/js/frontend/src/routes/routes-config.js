 import { createRouter, createWebHistory } from "vue-router";
 import axios from "axios";
 import routes_frontend from './router'

 axios.defaults.baseURL = window.location.origin + '/api'
 const routes = [...routes_frontend]

let router =  createRouter({
     history:createWebHistory("/"),
     fallback:true,
     linkActiveClass:'active',
     routes
 })


 router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')
    // const user = JSON.parse(localStorage.getItem('user'))
  
    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        next('/')
        return
    } 
    // console.log('user', user); 
    
    next()
   
  })

 export default router