import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  currencyDatas:CurrencyDetailsComponent;

  constructor(private _route: ActivatedRoute,){
  }

  ngOnInit() {
    const curDatas:CurrencyDetailsComponent = this._route.snapshot.data['currencyDetails'];
    this.currencyDatas = curDatas;
  }

}
