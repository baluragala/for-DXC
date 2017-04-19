import {Directive,ElementRef, HostListener } from '@angular/core'

@Directive({
    selector:'[appEventDirective]'
})
export class EventDirective{

    constructor(private el:ElementRef){

    }


 @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }


     @HostListener('click') onClick() {
        this.highlight("red");
    }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}