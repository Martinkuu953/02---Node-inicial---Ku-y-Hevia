import fs from 'fs';
const ARCHIVO_ENTRADA = "src/txt/entrada.txt";
const ARCHIVO_SALIDA = "src/txt/salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
function copiar(origen, destino){
const contenido = fs.readFileSync(origen);
fs.writeFileSync(destino, contenido);
console.log("Proceso finalizado.");
}