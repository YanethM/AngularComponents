import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '../../services/students.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  
  constructor(private _studentsService: StudentsService,
              private router:Router) { }

  ngOnInit(): void {
    this.students = this._studentsService.getStudents();
    console.log(this.students);
  }

  getStudent(index: number) {
    this.router.navigate(['/student',index]);
  }

}
