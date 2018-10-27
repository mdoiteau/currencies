import {Injectable} from '@angular/core';
import {CurrencyData} from '../currency-data.model';
import {Observable} from 'rxjs';
import {CurrencyDetailsData} from '../currency-details-data.model';

@Injectable()
export class CurrencyDetailsServiceMock{

    public static currencyDetailsData: CurrencyDetailsData =
      {
        "id": "USD",
        // "attributes": {
          "code": "USD",
          "name": "US Dollar",
          "currency_type": "national",
          "code_iso_numeric3": "840",
          "code_iso_alpha3": "USD",
          "symbol": "$",
          "native_symbol": "$",
          "category": "others"
        // },
      }

    public getCurrencyDetails(): Observable<any> {
        return Observable.create( {json: () => CurrencyDetailsServiceMock.currencyDetailsData });
    }
}
