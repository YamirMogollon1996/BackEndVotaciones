
export class ModeloCandidto {
    constructor(
        public nombre: string,
        public apellido: string,
        public partido: string,
        public foto?: string,
        public voto: number = 0,
        public activo: boolean = true
    ) {
        this.validar();
    }
    validar() {
        const regexNombre = /^(?!0$)[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]{2,50}$/;
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