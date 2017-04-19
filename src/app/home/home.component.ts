import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <h4>Styling Angular</h4>
  `,
  styles: [`h4{color:red}`],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
