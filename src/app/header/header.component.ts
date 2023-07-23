import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @HostBinding('class') className = 'block p-8 text-white';
}
