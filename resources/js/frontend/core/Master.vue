<script>
import './App.css'
export default{

}

</script>

<template>
    
    <div>
        <router-view :key="$route.fullPath"></router-view>
    </div>
   
</template>