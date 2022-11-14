import {Alumno} from "../alumno/alumno";

export class Curso{
  public nombre:string;
  public alumnos:Array<Alumno>;
  public terminado: boolean;

  constructor(nombre:string,alumnos:Array<Alumno>){
    this.nombre = nombre;
    this.alumnos = alumnos;
    this.terminado = Math.floor(Math.random() * (1 + 1))==0?false:true;
  }

  toString(){
    let tmp = this.nombre;
    for (let i=0;i<this.alumnos.length;i++)
    {
      tmp+="-"+this.alumnos[i].toString();
    }
    return tmp;
  }
}
