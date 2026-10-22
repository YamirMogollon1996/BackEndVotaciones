import express from "express";
import multer, { diskStorage } from "multer";
import path from "path";
const SubidaFotos = diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(process.cwd(), "src", "uploads");
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        let extaname = path.extname(file.originalname)
        cb(null, file.fieldname + "-" + uniqueSuffix + extaname);
    }
});
export const multerDatos = multer({ storage: SubidaFotos });