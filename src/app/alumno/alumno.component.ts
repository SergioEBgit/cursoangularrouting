import { Component, OnInit } from '@angular/core';
import {Alumno} from "./alumno";

@Component({
  selector: 'alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit{
  title = 'Alumno component creado';

  public nombre_ex = "Federico";
  public nombre:string;
  public edad:number;
  public matriculado:boolean;
  public notasParcial:Array<number> = [10,8,7];
  public alu:Alumno;

  constructor(){
    this.nombre = "Antonio";
    this.edad = 25;
    this.matriculado = false;
    this.alu = new Alumno("pepe");
    console.log(this.edad);
  }

  ngOnInit(): void{
    this.cambiarEdad();
    console.log(this.edad);
  }

  cambiarEdad():void{
    this.edad = 29;
  }

  cambiarMatricula(estado:boolean):void{
    this.matriculado = estado;
  }

  setNombre(nombre:string):void{
    this.nombre = nombre;
  }
}
