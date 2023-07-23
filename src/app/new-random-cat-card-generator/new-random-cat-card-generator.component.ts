import {Component, EventEmitter, HostBinding, Output} from '@angular/core';

@Component({
  selector: 'app-new-random-cat-card-generator',
  templateUrl: './new-random-cat-card-generator.component.html',
})
export class NewRandomCatCardGeneratorComponent {
  @HostBinding('class') className = 'flex justify-center'
  @Output() emit = new EventEmitter<void>()

  dispatch(){
    this.emit.emit();
  }
}
