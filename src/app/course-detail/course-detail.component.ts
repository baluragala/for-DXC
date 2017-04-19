import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-course-detail',
  template: `
    <p>
      course-detail Works!
      {{ courseId }}
      {{ sectionId }}
      {{ q }}
    </p>
  `,
  styles: []
})
export class CourseDetailComponent implements OnInit {

  courseId;
  sectionId;
  q;
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this._route);
    this.courseId = this._route.snapshot.params["id"];
    this.sectionId = this._route.snapshot.params["sid"];
    this.q = this._route.snapshot.queryParams["token"];
  }

}
