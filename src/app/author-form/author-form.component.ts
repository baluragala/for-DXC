import { Component, OnInit, ViewChild } from '@angular/core';
import {Author} from './author'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
  author: Author;

  @ViewChild('authorForm') authorForm:NgForm;

  constructor() { }
  
  ngOnInit() {
  }

  ngDoCheck(){
    console.log(this.authorForm.controls);
  }

  OnSubmit(model:Author){
    this.author=model;
    console.log(model);
  }

}
