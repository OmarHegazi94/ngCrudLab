import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  @Input() std: Student;

  @Output() deleteEvent: EventEmitter<Student>;
  constructor() { 
    this.deleteEvent = new EventEmitter<Student>();
  }

  delete(){
    this.deleteEvent.emit(this.std);
  }

  ngOnInit() {
  }

}
