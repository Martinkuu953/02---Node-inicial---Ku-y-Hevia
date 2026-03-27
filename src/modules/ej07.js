import currencyMapCountry from 'country-currency-map';
const { getCountryByAbbreviation, getCurrencyAbbreviation } = currencyMapCountry;

let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'US'; 
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`); 

function obtenerMoneda(codigo) {
    const nombrePais = getCountryByAbbreviation(codigo);
    if (!nombrePais) return null;
    return getCurrencyAbbreviation(nombrePais);
}