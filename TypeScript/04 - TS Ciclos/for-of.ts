interface Usuario{
    nombre:string;
    apellido:string
}

var listado: Array<Usuario> = [
    {
        nombre: "Silvia",
        apellido: "Gómez"
    },
    {
        nombre: "Carlos",
        apellido: "Pérez"
    },
    {
        nombre: "Tina",
        apellido: "López"
    }
]

for (let persona of listado) {
    console.log(persona.nombre, persona.apellido)
}