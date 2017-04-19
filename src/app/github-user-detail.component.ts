import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map"
import {GithubService} from './github.service'

@Component({
  selector: 'app-github-user-detail',
  template: `
    <p>
      github-user-detail Works!
    </p>
  `,
  styles: []
})
export class GithubUserDetailComponent implements OnInit {

  constructor(private service:GithubService) { 

  }

  ngOnInit() {
    // let s = this.service.getUserDetails('mojombo')
    //          .subscribe(response => console.log(response))

    // this.service.getReposForUser('baluragala')
    //             .subscribe(response => console.log(response.json()));

    this.service.getDoubleUserDetails('baluragala','defunkt',1)
    .subscribe(results => console.log(results));
  }

}
