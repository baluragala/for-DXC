import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { CourseService} from '../shared/course.service'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
  courses;
  @Output()  courseClicked: EventEmitter<any> = new EventEmitter<any>();


  constructor(private service:CourseService) { }

  ngOnInit() {
    this.courses = this.service.getCourses();
  }

  onClicked(c){
    console.log(c);
    this.courseClicked.emit(c);
  }

}
