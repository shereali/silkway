<script>
import {DocumentRequired, CallCenter, PDFFileDownload, ApplyButton, VisaSectionOne, VisaSectionTwo} from '../../components/sidebar'

export default{
    components:{
        DocumentRequired,
        CallCenter,
        PDFFileDownload,
        ApplyButton,
        VisaSectionOne,
        VisaSectionTwo,
    },

    setup(){
        
        
        
        return{ 
          
            
        }
    }
}
</script>
<template>
    <div class=" sm:w-1/4 bg-slate-100  px-5 py-10">
               <!--document required-->
               <DocumentRequired/>

                <!--call center-->
                <CallCenter/>

               <!--pdf file download-->
               <PDFFileDownload/>

                <!--apply button-->
                <ApplyButton/>
               <!--visa section one-->
               <VisaSectionOne/>
               <!--visa section two-->
               <VisaSectionTwo/>
                
            </div>
</template>