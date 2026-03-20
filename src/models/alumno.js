let username;
let dni;
let edad;

function Alumno(username = "", dni = "", edad = 0) {
    this.username = username;
    this.dni = dni;
    this.edad = edad;
    this.toString = function() {
        return "Nombre de Usuario: " + this.username + "\nDocumento: " + this.dni + "\nEdad: " + this.edad 
    }
}

export default Alumno;