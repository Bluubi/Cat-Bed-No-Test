import {Component, HostBinding, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  @HostBinding('class') className = 'block'

  cats: Observable<Cat[]> = of([])
  constructor(private readonly httpClient: HttpClient) {}

  askForRandomCat(){
    this.cats = this.httpClient.get<Cat[]>('https://api.thecatapi.com/v1/images/search');
  }

  ngOnInit(): void {
    this.askForRandomCat();
  }
}

export interface Cat {
  id:     string;
  url:    string;
  width:  number;
  height: number;
}
