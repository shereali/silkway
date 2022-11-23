<script>
import { Topbar, Navbar } from '../../components'
import './header.css'
export default {
    name:"MainHeader",
    components:{
        Topbar,
        Navbar
    }
    
}
</script>

<template>    
    <Topbar/>
    <Navbar/>
</template>