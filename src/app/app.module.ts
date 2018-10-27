import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CurrencyComponent} from './currency/currency.component';
import { MainComponent } from './main/main.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    MainComponent,
    CurrencyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
