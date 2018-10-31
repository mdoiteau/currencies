import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CurrencyDetails} from '../../model/currency-details.model';

@Injectable()
export class CurrencyDetailsServiceMock{

    public static currencyDetailsData: CurrencyDetails =
      {
        "id": "USD",
        "attributes": {
          "code": "USD",
          "name": "US Dollar",
          "currency_type": "national",
          "code_iso_numeric3": "840",
          "code_iso_alpha3": "USD",
          "symbol": "$",
          "native_symbol": "$",
          "category": "others"
        },
      }

    public getCurrencyDetails(): Observable<any> {
        return Observable.create( {json: () => CurrencyDetailsServiceMock.currencyDetailsData });
    }
}
