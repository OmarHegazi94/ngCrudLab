import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  @Output() addEvent: EventEmitter<Student>;

  newStudent:Student = new Student(0,"new student",40);

  constructor() { 
    this.addEvent = new EventEmitter<Student>();
  }

  addStudent(){
    this.addEvent.emit(this.newStudent);
  }

  ngOnInit() {
  }

}
