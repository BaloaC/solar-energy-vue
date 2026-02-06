export async function getLocationNavigator() {
    try {
        if (navigator.geolocation) {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            
            return position;

        } else {
            
            throw new Error("Error localizándolo, es probable que su navegador no tenga soporte para geolocalización o no tiene los permisos adecuados");
        }
    } catch (error) {
        
        throw new Error("Error localizándolo, es probable que su navegador no tenga soporte para geolocalización o no tiene los permisos adecuados");
    }
}