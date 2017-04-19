import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service'

@Component({
  selector: 'app-post-list',
  template: `
    <pre>{{posts | json }}<pre>
  `,
  styles: []
})
export class PostListComponent implements OnInit {

  posts:[any];

  constructor(private service:PostsService) { }

  ngOnInit() {
    this.service.getPosts().subscribe(posts => this.posts=posts)
  }

  ngDoCheck(){
    //this.service.getPosts().subscribe(posts => this.posts=posts)
  }

}
