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

for (let posicion in listado) {
   console.log(listado[posicion].nombre)
   console.log(listado[posicion].apellido)
}