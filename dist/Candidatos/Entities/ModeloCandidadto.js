export class ModeloCandidto {
    nombre;
    apellido;
    partido;
    foto;
    anio;
    voto;
    activo;
    constructor(nombre, apellido, partido, foto, anio = 0, voto = 0, activo = true) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.partido = partido;
        this.foto = foto;
        this.anio = anio;
        this.voto = voto;
        this.activo = activo;
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
        this.voto++;
    }
    desactivar() {
        this.activo = false;
    }
}
