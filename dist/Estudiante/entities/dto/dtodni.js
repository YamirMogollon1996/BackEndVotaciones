const regex = /^[0-9]{8}$/;
export const ValidateDatos = (dni) => {
    if (dni.length > 8 || dni.length === 0)
        return ['error'];
    if (!regex.test(dni))
        return ['Error recuerda minimo 8 digitos'];
    return true;
};
//# sourceMappingURL=dtodni.js.map