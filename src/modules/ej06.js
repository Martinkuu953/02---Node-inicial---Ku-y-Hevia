let url = null;
let resultado = null;

url    = 'q/index.htm?curso=2022&mes=mayo';
resultado = devolverUrlEnPartes(url)
console.log(resultado);

function devolverUrlEnPartes(laUrl) {
    try {
        const url = new URL(laUrl)

        return {
            host: url.origin,
            pathname: url.pathname,
            parametros: url.searchParams
        };
    } catch (error) {
        console.log("Hubo un error:", error.message);
        return null;
    }
    
}
