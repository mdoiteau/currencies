import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {CurrencyDetails} from '../model/currency-details.model';
import {CurrencyService} from '../service/currency.service';
import {Currency} from '../model/currency.model';

@Injectable()
export class CurrencyDetailsResolver implements Resolve<CurrencyDetails> {

  constructor(
    private currencyService:CurrencyService
  ){};

  resolve(route: ActivatedRouteSnapshot): Promise<Currency[]> {
    return this.currencyService.getCurrencyDetails(route.params['id']).toPromise();
  }

  //
  // resolve(route: ActivatedRouteSnapshot): CurrencyDetails {
  //   let curData:CurrencyDetails = new CurrencyDetails();
  //   curData.id =
  //   return curData;
  // }

}
