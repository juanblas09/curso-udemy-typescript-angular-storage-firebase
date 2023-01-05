import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  titulo: string = "Titulo de prueba";
  precio: number = 2400;
  ganancia: number = 0.412;
  fecha: Date = new Date('06-1-2019');
  texto: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem dignissimos accusamus voluptatem facilis velit? Id similique dicta non repellendus veritatis magnam, nulla commodi quae deserunt quaerat ducimus dolore accusantium culpa!";

  constructor() { }

  ngOnInit(): void {
  }

}
