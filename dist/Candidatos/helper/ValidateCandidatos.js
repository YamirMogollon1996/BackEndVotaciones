import { Estudiante } from "../../Estudiante/entities/Entities.js";
let TestVliadte = {
    nombre: /^(?!0$)[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{2,50}$/,
};
// export const ValidateSenior = (objetVali: any): string []| Estudiante => {
//   if (  TestVliadte.nombre.test(objetVali.nombre)) return [ 'nombre Required']
//   if (   TestVliadte.nombre.test(objetVali.nombre))return['Apellido es required']
//   if (!objetVali.activo) return ['Estado required'] 
// }
// class Data {
//     public nombre!: string
//     public lastname!: string
//     constructor(nombre: string, lastname: string) {
//         this.nombre = nombre,
//             this.lastname = lastname
//     }
// }
// const datos = (valid: any): string[] | Data => {
//     if (!TestVliadte.test(   valid.nombre)) return ['no nombre data']
//     if (!TestVliadte.test(   valid.nombre)) return ['no lastaname data']
//     return new Data(valid.nombre, valid.lastname)
// }
// let ObjetoData = new Data('mogollon', 'sdfsdfsd')
// let incrementar = datos(ObjetoData)
// if  (Object.values(incrementar).length === 1) {
//             console.log( incrementar)
// }else{
//             console.log( incrementar)
// }
//# sourceMappingURL=ValidateCandidatos.js.map