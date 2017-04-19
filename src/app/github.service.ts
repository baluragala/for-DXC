import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from "rxjs"

@Injectable()
export class GithubService {

  constructor(private http:Http) { }

  getUserDetails(username:string) : Observable<any>{
    let response = this.http.get(`https://api.github.com/users/${username}`)
             .map(response=>response.json())
    return response;
  }

  getReposForUser(username:string): any{
    //1. get user getUserDetails
    //2. get repo getRepoDetails
    let reposObservable;
    let r = this.http.get(`https://api.github.com/users/${username}`)
            .map(r=>r.json().repos_url)
            .mergeMap(repos_url => this.http.get(repos_url))
   return r;
  }

  getDoubleUserDetails(user1,user2,id){
    let user1$ = this.http.get(`https://api.github.com/users/${user1}`).map(r=>r.json())
    let user2$ = this.http.get(`https://api.github.com/users/${user2}`).map(r=>r.json())
    let posts$ = this.http.get(`http://localhost:3000/posts/${id}`).map(r=>r.json())

    return Observable.forkJoin([user1$,user2$,posts$])
  }

}
