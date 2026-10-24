import streamifier from "streamifier"
import { v2 as cloudbinary } from "cloudinary"   
import type { UploadApiErrorResponse, UploadApiResponse } from "cloudinary"  

export const SubirImagen = (Buffer: Buffer): Promise<UploadApiResponse> => {
    return new Promise((resolve, reject) => {
        const stream = cloudbinary.uploader.upload_stream({
            folder: 'my_app_folder',
            transformation: {
                width: 500,
                height: 500,
                crop: "scale"
            }
        },
            (error: UploadApiErrorResponse | undefined,
                results: UploadApiResponse | undefined) => {
                if (error) {
                    reject(error)
                    return
                }
                if (!results) {
                    reject(new Error('no se obtuvo la respuesta de clodubinary'))
                }
                resolve(results!)
            }
        )
        streamifier.createReadStream(Buffer).pipe(stream)
    })
}