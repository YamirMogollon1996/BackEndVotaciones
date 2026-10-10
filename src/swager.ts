
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import  type { Application } from "express";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Votaciones",
      version: "1.0.0",
      description: "Documentación de la API con Swagger",
    },
  },
  // Aquí defines dónde buscar las anotaciones
  apis: ["./src/**/*.ts"], 
};

const swaggerSpec = swaggerJSDoc(options);

export function swaggerDocs(app: Application, port: number) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📑 Swagger listo en http://localhost:${port}/api-docs`);
}