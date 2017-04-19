import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit {

  private phase: number = 0;

  @Input('data') dataVar: string;

  constructor() {
    console.log(` constructor Phase :${this.phase++}`);
  }

  ngOnInit() {
    console.log(` ngOnInit Phase :${this.phase++}`);
  }

  ngOnChanges() {
    console.log(` ngOnChanges Phase :${this.phase++}`);
  }

  ngDoCheck() {
    console.log(` ngDoCheck Phase :${this.phase++}`);
  }

  ngAfterContentInit() {
    console.log(` ngAfterContentInit Phase :${this.phase++}`);
  }

  ngAfterContentChecked() {
    console.log(` ngAfterContentChecked Phase :${this.phase++}`);
  }

  ngAfterViewInit() {
    console.log(` ngAfterViewInit Phase :${this.phase++}`);
  }

  ngAfterViewChecked(){
    console.log(` ngAfterViewChecked Phase :${this.phase++}`);
  }

  ngOnDestroy(){
    console.log(` ngAfterViewChecked Phase :${this.phase++}`);
  }
}


