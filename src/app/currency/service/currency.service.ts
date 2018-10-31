import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class CurrencyService {

  private apiBaseUrl:string = 'http://localhost:8080';
  private currencyListEndpoint: string = '/getCurrencyList';
  private currencyDetailsEndpoint: string = '/getCurrencyDetails';

  constructor(private http: HttpClient) {}

  public getCurrencyList(): Observable<any> {
    let uri = `${this.apiBaseUrl}${this.currencyListEndpoint}`;
    return this.http.get(uri).pipe(map(response => response ));
  }

  public getCurrencyDetails(id: string): Observable<any> {
    let uri = `${this.apiBaseUrl}${this.currencyDetailsEndpoint}?id=${id}`;
    return this.http.get(uri).pipe(map(response => response ));
  }

}
