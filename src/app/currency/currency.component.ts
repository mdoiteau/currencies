import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'currency',
  templateUrl: 'currency.component.html',
  styleUrls: ['currency.component.css']
})
export class CurrencyComponent {

  @Input()
  id:string;

  @Input()
  type:string;

  @Input()
  symbol:string;

  constructor(private _router: Router){
  }

  showDetails():void {
    this._router.navigate(['currency',  this.id]);
  }

}
