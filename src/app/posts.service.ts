import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class PostsService {

  constructor(private http:Http) { }

  getPosts(){
    return this.http.get('http://localhost:3000/posts')
                    .map(r=>r.json())
  }

}
