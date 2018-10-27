import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {CurrencyDetailsData} from './currency-details-data.model';

@Injectable()
export class CurrencyDetailsResolver implements Resolve<CurrencyDetailsData> {

  resolve(route: ActivatedRouteSnapshot): CurrencyDetailsData {
    let curData:CurrencyDetailsData = new CurrencyDetailsData();
    curData.id = route.params['id'];
    return curData;
  }

}
