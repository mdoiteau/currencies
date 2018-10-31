import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {Currency} from '../currency/model/currency.model';
import {CurrencyServiceMock} from '../currency/service/currency.service.mock';

@Injectable()
export class MainResolver implements Resolve<Currency[]> {

  resolve(route: ActivatedRouteSnapshot): Currency[] {
    return CurrencyServiceMock.currencyDataList;
  }

}
