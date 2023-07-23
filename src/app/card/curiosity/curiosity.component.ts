import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
})
export class CuriosityComponent {

  curiosities: Observable<Curiosity> = of();

  constructor(private readonly httpClient: HttpClient) {
    this.curiosities = this.httpClient.get<Curiosity>('https://meowfacts.herokuapp.com/');
  }
}

interface Curiosity {
  data: string[];
}
