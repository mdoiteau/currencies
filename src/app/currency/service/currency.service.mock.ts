import {Injectable} from '@angular/core';
import {Currency} from '../model/currency.model';
import {Observable} from 'rxjs';

@Injectable()
export class CurrencyServiceMock {

    public static currencyDataList: Currency[] = [
      {
        "id": "USD",
        "type": "national",
        "symbol": "$"
      },
      {
        "id": "EUR",
        "type": "national",
        "symbol": "€"
      },
      {
        "id": "JPY",
        "type": "national",
        "symbol": "￥"
      },
      {
        "id": "CHF",
        "type": "national",
        "symbol": "CHF"
      }
    ];

    public getCurrencyList(): Observable<any> {
        return Observable.create( {json: () => CurrencyServiceMock.currencyDataList });
    }
}
