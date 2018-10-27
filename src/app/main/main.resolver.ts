import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {CurrencyData} from '../currency/currency-data.model';
import {CurrencyServiceMock} from '../currency/service/currency.service.mock';

@Injectable()
export class MainResolver implements Resolve<CurrencyData[]> {

  resolve(route: ActivatedRouteSnapshot): CurrencyData[] {
    return CurrencyServiceMock.currencyDataList;
  }

}
