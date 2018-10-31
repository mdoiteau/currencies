import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CurrencyDetails} from '../model/currency-details.model';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  currencyDatas:CurrencyDetails;

  constructor(private _route: ActivatedRoute){
  }

  ngOnInit() {
    const curDatas:CurrencyDetails = this._route.snapshot.data['currencyDetails'];
    this.currencyDatas = curDatas;
  }

}
