import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {CurrencyDetailsComponent} from './currency-details/currency-details.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'currency/:id', component: CurrencyDetailsComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
