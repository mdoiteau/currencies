import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {CurrencyDetails} from '../model/currency-details.model';

@Injectable()
export class CurrencyDetailsResolver implements Resolve<CurrencyDetails> {

  resolve(route: ActivatedRouteSnapshot): CurrencyDetails {
    let curData:CurrencyDetails = new CurrencyDetails();
    curData.id = route.params['id'];
    return curData;
  }

}
