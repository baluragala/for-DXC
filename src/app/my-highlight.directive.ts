import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  constructor(el:ElementRef) { 
    console.log(el.nativeElement);
    el.nativeElement.style.backgroundColor = 'orange';
  }

}
