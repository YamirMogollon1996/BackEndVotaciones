
export class ModeloCandidto {

    constructor(
        public nombre: string,
        public apellido: string,
        public partido: string,
        public foto?: string,
        public anio: number = 0,
        public voto: number = 0,
        public activo: boolean = true
    ) {
        this.validar();
    }
    validar() {
        const regexNombre = /^(?!0$)[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{2,50}$/;
        if (this.anio < 0 && this.anio > 100) {
            throw new Error("Error de ingreso de datos no puede sermenor a 0 o mayor a 100");
        }
        if (!regexNombre.test(this.nombre)) {
            throw new Error("Nombre inválido: solo letras y espacios, mínimo 2 caracteres.");
        }
        if (!regexNombre.test(this.apellido)) {
            throw new Error("Apellido inválido.");
        }
        if (!regexNombre.test(this.partido)) {
            throw new Error("Partido inválido.");
        }
    }
    votar() {
        this.voto++
    }

    desactivar() {
        this.activo = false
    }


}