import { Component, OnInit } from '@angular/core';
import {Currency} from '../currency/model/currency.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currencyList:Currency[];

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.currencyList = this.route.snapshot.data['currencyList'];
  }

}
