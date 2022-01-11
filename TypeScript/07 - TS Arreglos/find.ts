interface Alumno{
    id:number,
    nombre:string,
    apellido:string
}

var alumnos:Alumno[] = [];
alumnos.push({id: 1, nombre:"Gilberto", apellido:"Funes"});
alumnos.push({id: 2, nombre:"Trinidad", apellido:"Gonzalez"});
alumnos.push({id: 3, nombre:"Violeta", apellido:"Conil"});

var alumnoSeleccionado = alumnos.find((alumno)=>{
    return alumno.id = 2;
})

console.log(alumnoSeleccionado);
