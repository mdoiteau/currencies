import { Component, OnInit } from '@angular/core';
import {CurrencyData} from '../currency/currency-data.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currencyList:CurrencyData[];

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.currencyList = this.route.snapshot.data['currencyList'];
  }

}
