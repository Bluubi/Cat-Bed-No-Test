import {Component, HostBinding, ViewChild} from '@angular/core';
import {CardComponent} from "./card/card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  @ViewChild('card') cardComponent!: CardComponent;
  title = 'Card cat creator';

  askForNewRandomCard(){
    this.cardComponent.askForRandomCat();
  }
}
