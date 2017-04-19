import { Component } from '@angular/core'

@Component({
    selector:'app-hello',
    template:'Greeting : {{greeting}}'
})
export class HelloComponent {
 greeting="Hello Angular";
}