import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl}
 from '@angular/forms'
import {Http,Response,Headers,RequestOptions} from '@angular/http'
import "rxjs/add/operator/map"

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postform:FormGroup;
  constructor(private http:Http) { }

  ngOnInit() {
    this.postform =  new FormGroup({
      title:new FormControl(),
      author:new FormControl()
    })
  }

  onSubmit(){
   let title = this.postform.controls['title'].value;
   let author = this.postform.controls['author'].value;
   let body = {title,author};

   let headers = new Headers({"Content-Type":"application/json","X-App-Id":"qaws233^5rtfd"});
   let options = new RequestOptions({headers:headers});
   
   this.http.post("http://localhost:3000/posts",body,options)
   .map(response=>response.json())
   .subscribe(data => console.log(data));
  }

}
