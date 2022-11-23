<script>

import {MainHeader, MainFooter} from '../containers'


export default{
    components:{
        MainHeader,
        MainFooter
    }
}
</script>

<template>

        <MainHeader/>
        <slot></slot>
        <MainFooter/>
</template>