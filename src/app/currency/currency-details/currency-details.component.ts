import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CurrencyDetailsData} from './currency-details-data.model';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  currencyDatas:CurrencyDetailsData;

  constructor(private _route: ActivatedRoute){
  }

  ngOnInit() {
    const curDatas:CurrencyDetailsData = this._route.snapshot.data['currencyDetails'];
    this.currencyDatas = curDatas;
  }

}
