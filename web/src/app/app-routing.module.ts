import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardAlterComponent } from 'src/app/card-alter/card-alter.component';
import { DeckComponent } from 'src/app/deck/deck.component';


const routes: Routes = [

  { path: 'cardAlter', component: CardAlterComponent },
  { path: 'deck', component: DeckComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
