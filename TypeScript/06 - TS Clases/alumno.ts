class Alumno {
    private nombre: string;
    private apellido: string;
    private peso: number;

    constructor(nombre:string, apellido:string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saludar();
    }

    private saludar():void{
        console.log("¡Hola", this.nombre, "!");
    }

    crear(nombreP:string, apellidoP:string, pesoP:number):void{
        this.nombre = nombreP;
        this.apellido = apellidoP;
        this.peso = pesoP;
        //this.saludar();
    }
}

let al1: Alumno = new Alumno("Juan", "Tschopp", 116);
al1.crear("Juan", "Tschopp", 116);

let al2: Alumno = new Alumno("Silvia", "Gimenez", 16);