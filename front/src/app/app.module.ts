import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CardComponent } from './card/card.component';
import { CardService } from "../service/CardService";


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
