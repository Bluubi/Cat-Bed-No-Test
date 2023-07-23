import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from './header/header.component';
import {CuriosityComponent} from './card/curiosity/curiosity.component';
import {BlobComponent} from './blob/blob.component';
import {
  NewRandomCatCardGeneratorComponent
} from './new-random-cat-card-generator/new-random-cat-card-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    CuriosityComponent,
    BlobComponent,
    NewRandomCatCardGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
