import { v2 as cloudinary } from "cloudinary";
// 443576563381214  
// Ahbf7BgeFqi9zFNtRs5c3QcRNHo
// mediaflows_b4f96945-46e8-42ce-8ba5-2bbd22eb3808
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
export const CloudbinaryInstance = cloudinary;
