export function validateLength(v, min, max) {
    if (v.length < min || v.length >= max) {
        return false;
    } else {
        return true
    }
}

/**
 * 
 * @param {boolean} isNumber true si se quiere validar si es numérico, false si se quiere validar que sea string
 * @param {value} valor elemento a evaluar
 * @returns 
 */
export function validateTypeDatum(isNumber, valor) {
    if (isNumber) {
        return isNaN(valor) == true ? false : true;

    } else { // validmaos si es string
        const regex = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑüÜ]*$/;
        return regex.test(valor);
    }
}

export function validateEmail(email) {
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return validEmail.test(email);
}