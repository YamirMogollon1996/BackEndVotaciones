import streamifier from "streamifier";
import { v2 as cloudbinary } from "cloudinary";
export const SubirImagen = (Buffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudbinary.uploader.upload_stream({
            folder: 'my_app_folder',
            transformation: {
                // width: 300,
                crop: "limit",
                quality: 'auto'
            }
        }, (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            if (!results) {
                reject(new Error('no se obtuvo la respuesta de clodubinary'));
            }
            resolve(results);
        });
        streamifier.createReadStream(Buffer).pipe(stream);
    });
};
