import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentArray:Student[] = [
     new Student(1,"Omar",26), 
     new Student(2,"koko",25),
     new Student(3,"bobo",24),
     new Student(4,"lolo",23),
     new Student(5,"soso",22)
  ];

  // recieve student sent from sudent details and compare id with student array then delete
  deleteFromList(student: Student){
    for(let i =0; i < this.studentArray.length;i++){
      if(student.id === this.studentArray[i].id) {
        this.studentArray.splice(i,1);
        break;
      }
    }
  }

  // recieve the student event and add it to student array as new object to make every new object has it's own refrence
  addToStudentArray(student:Student){
    this.studentArray.push(new Student(student.id,student.name,student.age));
  }

  constructor() { }

  ngOnInit() {
  }

}
