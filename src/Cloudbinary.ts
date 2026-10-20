import { v2 as cloudbinary } from "cloudinary"


// 443576563381214  
// Ahbf7BgeFqi9zFNtRs5c3QcRNHo
// mediaflows_b4f96945-46e8-42ce-8ba5-2bbd22eb3808


const cloudinary = async (file: string) => {


    cloudbinary.config({
        cloud_name: '',
        api_key: '',
        api_secret: ''
    })


}

export default cloudinary