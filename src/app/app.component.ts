import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { IService } from './shared/IService';
import { CourseService} from './shared/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit{
  cid='ANNNN';
  sid='S7';
  title = 'Hello angular2';
  selectedCourse=''
  courseCode=""
  c={id:1, title:'Android Programming', author:'James'};
  d=new Date();
  courseService:CourseService;
  courses:Array<any>;

  privilegedUser:boolean=true;

  showAlert(){
    alert('Button clicked!!!');
  }

  constructor(service:CourseService){
      console.log(service);
      this.courseService = service;
  }
  
  ngOnInit(){
    this.courses = this.courseService.getCourses();
  }

ngDoCheck(){
  console.log(this.courseCode);
  if(this.courseCode.length > 10){
    alert('Course Code cannot be morethan 10 chars')
  }
}

courseClickedOnParent(c){
  this.selectedCourse=c.title;
}
  // courses=[
  //   {id:1, title:'Android Programming', author:'James'},
  //   {id:2, title:'Angular Programming', author:'Kelly'},
  //   {id:3, title:'React Programming', author:'Thomson'}
  // ]
}
