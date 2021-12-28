interface Persona {
    nombre:string,
    apellido:string,
    edad:number,
    peso:number
}

var persona1: Persona = {
    nombre: "Mirtha",
    apellido: "Pérez",
    edad: 40,
    peso: 80
}

console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.edad);
console.log(persona1.peso);