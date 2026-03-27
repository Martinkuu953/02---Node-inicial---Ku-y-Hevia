import Alumno from '../models/alumno.js';

let alumno1 = new Alumno("Maximo Hevia"  , "23464244", 12);
let alumno2 = new Alumno("Martín Ku", "13513553", 53);
let alumno3 = new Alumno();

alumno3.username = "Ernesto Longo";
alumno3.dni = "23472421";

console.clear();
console.log(alumno1);
console.log(alumno2);
console.log(alumno3.toString());
