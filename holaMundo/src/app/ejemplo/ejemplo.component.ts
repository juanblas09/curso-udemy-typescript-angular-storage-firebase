import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre: string;
  apellido: string;

  constructor(){
    this.nombre = "";
    this.apellido = "";
  }
}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {
  alumno: Alumno = new Alumno();
  listaAlumnos: Array<Alumno> = new Array<Alumno>();
  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.listaAlumnos.push({
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido
    })
    this.alumno.nombre='';
    this.alumno.apellido='';
    console.log(this.listaAlumnos);
  }

}
