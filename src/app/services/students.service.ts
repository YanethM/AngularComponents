import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Student[] = [
    {
      img:"assets/img/i1.png",
      name: 'Batman',
      age:29,
      description:'TGO'
    },
    {
      img:"assets/img/i2.png",
      name:'Flash',
      description:'Ing'
    },
    {
      img:"assets/img/i3.png",
      name:'SuperWoman',
      description:'Ing'
    },
    {
      img:"assets/img/i1.png",
      name:'Batman',
      description:'TGO'
    },
    {
      img:"assets/img/i2.png",
      name:'Flash',
      description:'Ing'
    },
    {
      img:"assets/img/i3.png",
      name:'SuperWoman',
      description:'TGO'
    }
  ];
  
  public getStudents() {
    return this.students;
  }

  public getStudent(index: number) {
    return this.students[index];
  }
  
  constructor() { }
}

export interface Student{
  img:string;
  name: string;
  description:string;
  age?: number;
  estadoCivilCasado?: boolean;
}
