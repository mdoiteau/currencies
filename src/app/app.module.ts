import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CurrencyComponent} from './currency/currency.component';
import { MainComponent } from './main/main.component';
import { CurrencyDetailsComponent } from './currency/currency-details/currency-details.component';
import {CurrencyDetailsResolver} from './currency/currency-details/currency-details.resolver';
import {MainResolver} from './main/main.resolver';

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
  providers: [
    CurrencyDetailsResolver,
    MainResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
