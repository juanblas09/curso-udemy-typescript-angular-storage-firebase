let nombres: Array<string> = ["Ana", "Silvia", "Pedro"];
console.log(nombres);
nombres.push("Carlos");
console.log(nombres);

interface Alumno{
    nombre:string,
    apellido:string
}

var alumnos: Alumno[] = [];

alumnos.push({nombre:"Ana", apellido:"Bressi"});
alumnos.push({nombre:"Noelli", apellido:"Savino"});

console.log(alumnos);