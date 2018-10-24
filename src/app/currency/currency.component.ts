import {Component, Input} from '@angular/core';

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

  goDetails():void {
    console.log('clic:', this.id);
  }

}
