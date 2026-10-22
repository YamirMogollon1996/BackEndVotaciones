import streamifier from "streamifier";
import { v2 as cloudbinary } from "cloudinary";
export const SubirImagen = (Buffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudbinary.uploader.upload_stream({
            folder: 'my_app_folder',
            transformation: {
                width: 500,
                height: 500,
                crop: "fill"
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
