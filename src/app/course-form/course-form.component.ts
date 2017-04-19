import { Component, OnInit, ViewChild,Input} from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  inputs:['data']
})
export class CourseFormComponent implements OnInit {
  
 title:string='';
 description:string='';

 ngDoCheck(){
   console.log(this.courseForm.value);
 }
 @ViewChild('courseForm') courseForm:NgForm;
  constructor() { }

  ngOnChanges(){
    console.log(this)
  }

  ngOnInit() {
    console.log(this.courseForm);
  }
}
