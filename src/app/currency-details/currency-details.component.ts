import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  id:string;

  constructor(private _route: ActivatedRoute,){
  }

  ngOnInit() {
    this._route.params.subscribe(value => this.id = value['id'] )
  }

}
