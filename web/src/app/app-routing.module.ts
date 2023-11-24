import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardAlterComponent } from 'src/app/card-alter/card-alter.component';


const routes: Routes = [

  { path: 'cardAlter', component: CardAlterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
