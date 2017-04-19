import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {


  courseTitle="Angular2"
  courseAuthor="baluragala"
  coursePrice=600

  @Input() course;
  @Input('coupon') offer;

  ngDoCheck(){
    console.log(this.course);
    console.log(this.offer);
  }

  // @Input() title;
  // @Input() author;
  // @Input() price;


  constructor() { }

  ngOnInit() {
  }

}
