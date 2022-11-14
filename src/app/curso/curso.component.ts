import { Component, OnInit } from '@angular/core';
import {Alumno} from "../alumno/alumno";
import {Curso} from "./curso";

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{
  title = 'Curso component creado';

  public cursos:Array<Curso>;

  constructor(){
    this.cursos = [];
    for (let i=0;i<2;i++) {
      let alumnos = [];
      for (let j = 0; j < 4; j++) {
        let a = new Alumno("alumno" + j);
        alumnos.push(a);
      }
      this.cursos.push(new Curso("curso"+i,alumnos));
      console.table(this.cursos);

    }
  }

  ngOnInit(): void{
  }
}
