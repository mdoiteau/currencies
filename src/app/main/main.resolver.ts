import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {Currency} from '../currency/model/currency.model';
import {CurrencyServiceMock} from '../currency/service/currency.service.mock';
import {CurrencyService} from '../currency/service/currency.service';

@Injectable()
export class MainResolver implements Resolve<Currency[]> {

  constructor(
    private currencyService:CurrencyService){};

  resolve(route: ActivatedRouteSnapshot): Promise<Currency[]> {
    return this.currencyService.getCurrencyList().toPromise();
  }

}
