<script>
import {
    Thumbnail,BroadDetails,NoteOne,PhotoSpecification,PhotoSpecificationText,ProcessTime,NoteTwo
} from '../../components/content'

export default{
    components:{
        Thumbnail,
        BroadDetails,
        NoteOne,
        PhotoSpecification,
        PhotoSpecificationText,
        ProcessTime,
        NoteTwo,
    },

    setup(){
        return{ 
           
        }
    }
}
</script>
<template>
<div class=" sm:w-3/4 h-full  px-10">
    <div class="page__content__section gid gap-y-10">
        <!--page thumbnail-->
        <Thumbnail/>  
        <div class="page__content">
            <h1 class="text-rose-600 text-2xl">MANDATORY REQUIREMENTS FOR THAI VISA APPLICATION</h1>
           <!--broad details-->
           <BroadDetails/>
            <!--important note one-->
            <NoteOne/>
            <!--photo specification-->
            <PhotoSpecification/>

            <!--photo specification text section-->
            <PhotoSpecificationText/>
            <!--process time-->
            <ProcessTime/>
            <!--note two-->
            <NoteTwo/>
        </div>  
    </div>
</div>
</template>