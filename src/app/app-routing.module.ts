import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrencyComponent} from './currency/currency.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CurrencyComponent],
  declarations: [
    CurrencyComponent
  ]
})
export class AppRoutingModule { }
